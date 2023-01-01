#include <iostream>
#include <fstream>
#include <optional>
#include <vector>

struct Args
{
    std::string inputFileName;
    std::string searchString;
};

void InitInput(std::ifstream &input);

std::optional<std::vector<int>> findIndexesOfLineBySubstring(const std::optional<Args> &args, std::istream &input);

std::optional<Args> ParseArgs(int argc, char *argv[])
{
    if (argc != 3)
    {
        std::cout << "Invalid arguments count. Usage: find <input file name> <findIndexesOfLineBySubstring>" << std::endl;
        return std::nullopt;
    }

    Args args;
    args.inputFileName = argv[1];
    args.searchString = argv[2];
    return args;
}

int main(int argc, char *argv[])
{
    auto args = ParseArgs(argc, argv);

    if (!args)
    {
        return 1;
    }
// функция принимающая имена файлов
    std::ifstream input;
    input.open(args->inputFileName);

    if (!input.is_open())
    {
        std::cout << "Failed to open " << args->inputFileName << " for reading" << std::endl;
        return 1;
    }

    try
    {
        InitInput(input);
    }
    catch (const std::exception& exception)
    {
        std::cout << "123" << std::endl;
    }

    auto indexOfString = findIndexesOfLineBySubstring(args, input);

    if (indexOfString.has_value())
    {
        for (int i = 0; i < indexOfString.value().size(); ++i)
        {
            std::cout << "String: " << indexOfString.value()[i] << std::endl;
        }
    }
    else
    {
        std::cout << "String not found" << std::endl;
        return 1;
    }

    return 0;
}

void InitInput(std::ifstream &input)
{
    if (!input.is_open())
    {
        throw std::invalid_argument("Failed to open file fo reading");
    }

    if (input.bad())
    {
        throw std::invalid_argument("Failed to read data from input file");
    }
}

std::optional<std::vector<int>> findIndexesOfLineBySubstring(const std::optional<Args> &args, std::istream &input) // принимает поток и то, что ей нужно найти
{
    std::vector<int> arrayOfIndex;
    std::string str;
    int count = 0;
    while (getline(input, str))
    {
        count++;
        size_t position = str.find(args->searchString);
        if (position != std::string::npos && !args->searchString.empty())
        {
            arrayOfIndex.push_back(count);
        }
    }

    if (!arrayOfIndex.empty())
    {
        return arrayOfIndex;
    }
    return std::nullopt;
}