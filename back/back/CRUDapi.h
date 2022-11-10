#pragma once

#include <stdlib.h>
#include <iostream>
#include "mysql_connection.h"
#include <cppconn/driver.h>
#include <cppconn/exception.h>
#include <cppconn/prepared_statement.h>

using namespace std;

class CRUDapi
{
private:
    //==============================================================================
    class DB 
    {
    public:
        DB();

        void setAuthProps(string server, string username, string password);
        bool DBconnect(string server, string username, string password);
        void DBdisconnect();
        bool DBsetSchema(string schemaName);
        bool tsql(string transact);

    private:
        struct AuthProps
        {
            string server;
            string username;
            string password;
        } authProps;

        struct ConnProps
        {
            sql::Driver* driver;
            sql::Connection* con;
            sql::Statement* stmt;
            sql::PreparedStatement* pstmt;
        } connProps;
    };
    //==============================================================================
    class API
    {
    public:
        API(DB *CRUDDB);

        bool Create();
        bool Read();
        bool Update();
        bool Delete();

    private:
        DB* CRUDDB;
    };
    //==============================================================================
public:
    CRUDapi(string server, string username, string password);
    ~CRUDapi();

    DB CRUDDB;
    API *api;
};

