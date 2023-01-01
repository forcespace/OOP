#!/bin/bash

FILE=../cmake-build-debug/input.txt

if test -f "$FILE"; then
  echo "$FILE exists."
else
  echo "$FILE does not exist."
fi
