#include <iostream>
#include <optional>
#include <fstream>
#include <vector>

const int SIZE = 3;
const int ACCURACY = 3;

struct Args
{
    std::string firstFilename;
    std::string secondFilename;
};

typedef float Matrix3x3[SIZE][SIZE];

using Matrix = std::vector<std::vector<float>>;

struct WrapperMatrix
{
    Matrix3x3 matrix;
};

Args ParseArgs(int argc, char *argv[])
{
    if (argc != 3)
    {
        throw std::invalid_argument("Invalid arguments count. Usage: matrix <first input file input file name> <second input file input file name>");
    }

    Args args;
    args.firstFilename = argv[1];
    args.secondFilename = argv[2];
    return args;
}

void InitInput(std::ifstream &input, const std::string &name)
{
    input.open(name);

    if (!input.is_open())
    {
        throw std::invalid_argument("Failed to open file fo reading");
    }

    if (input.bad())
    {
        throw std::invalid_argument("Failed to read data from input file");
    }
}

void InitMatrix(Matrix &matrix)
{
    for (auto i = 0; i < SIZE; i++)
    {
        matrix.push_back(std::vector<float>({}, i));

        for (auto j = 0; j < SIZE; j++)
        {
            matrix[i].push_back(0);
        }
    }
}

void FillMatrix(std::istream &input, Matrix &matrix)
{
    for (auto i = 0; i < SIZE; i++)
    {
        for (auto j = 0; j < SIZE; j++)
        {
            input >> matrix[i][j];
        }
    }
}

WrapperMatrix GetMultiMatrix(const std::vector<std::vector<float>> &firstMatrix, const std::vector<std::vector<float>> &secondMatrix)
{
    WrapperMatrix resultMatrix = {0};

    for (int i = 0; i < SIZE; ++i)
    {
        for (int j = 0; j < SIZE; ++j)
        {
            for (int resultIndex = 0; resultIndex < SIZE; ++resultIndex)
            {
                resultMatrix.matrix[i][j] += firstMatrix[i][resultIndex] * secondMatrix[resultIndex][j];
            }
        }
    }

    return resultMatrix;
}

void PrintMatrix(WrapperMatrix resultMatrix)
{
    for (auto &j: resultMatrix.matrix)
    {
        for (float i: j)
        {
            std::cout << std::fixed << std::setprecision(ACCURACY) << i << " ";
        }
        std::cout << std::endl;
    }
}

int main(int argc, char *argv[])
{
    try
    {
        auto args = ParseArgs(argc, argv);

        std::ifstream firstFile;
        std::ifstream secondFile;
        InitInput(firstFile, args.firstFilename);
        InitInput(secondFile, args.secondFilename);

        Matrix firstMatrix;
        Matrix secondMatrix;
        InitMatrix(firstMatrix);
        InitMatrix(secondMatrix);
        FillMatrix(firstFile, firstMatrix);
        FillMatrix(secondFile, secondMatrix);

        WrapperMatrix result = GetMultiMatrix(firstMatrix, secondMatrix);
        PrintMatrix(result);
    }
    catch (const std::invalid_argument &checkArgs)
    {
        std::cout << checkArgs.what() << std::endl;
        return 1;
    }

    return 0;
}