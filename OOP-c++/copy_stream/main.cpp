#include <iostream>
#include <fstream>
#include <optional>

struct Args
{
    std::string inputFileName;
    std::string outputFileName;
};

void CopyStream(std::ifstream &input, std::ofstream &output);

std::optional<Args> ParseArgs(int argc, char *argv[])
{
    if (argc != 3)
    {
        std::cout << "Invalid arguments count" << std::endl;
        std::cout << "Usage: copyStream <input file name> <output file name>" << std::endl;
        return std::nullopt;
    }

    Args args;
    args.inputFileName = argv[1];
    args.outputFileName = argv[2];
    return args;
}

int main(int argc, char *argv[])
{
    auto args = ParseArgs(argc, argv);

    if (!argc)
    {
        return 1;
    }

    std::ifstream input;
    input.open(args->inputFileName);

    if (!input.is_open())
    {
        std::cout << "Failed to open " << args->inputFileName << "for reading" << std::endl;
        return 1;
    }

    std::ofstream output;
    output.open(args->outputFileName);

    if (!output.is_open())
    {
        std::cout << "Failed to open " << args->outputFileName << "for writing" << std::endl;
        return 1;
    }

    CopyStream(input, output);

    if (input.bad())
    {
        std::cout << "Failed to read data from input file" << std::endl;
        return 1;
    }

    if (!output.flush())
    {
        std::cout << "Failed to write data from output file" << std::endl;
        return 1;
    }

    return 0;
}

void CopyStream(std::ifstream &input, std::ofstream &output)
{
    char ch;
    while (input.get(ch))
    {
        if (!output.put(ch))
        {
            output.put(ch);
        }
    }
}