#include <iostream>
#include "CRUDapi.h"


using namespace std;

int main()
{
    setlocale(LC_ALL, "RU");

    CRUDapi api("tcp://127.0.0.1:3306", "root", "root");

    api.api->Create();


}