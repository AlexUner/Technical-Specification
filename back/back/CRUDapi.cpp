#include "CRUDapi.h"

using namespace std;
using namespace sql;

//==============================================================================
CRUDapi::CRUDapi(string server, string username, string password)
{
    CRUDDB.DBconnect(server, username, password);
    api = new API(&CRUDDB);
}

CRUDapi::~CRUDapi()
{
    CRUDDB.DBdisconnect();
}
//==============================================================================
CRUDapi::DB::DB()
{
    connProps.con = NULL;
    connProps.driver = NULL;
    connProps.pstmt = NULL;
    connProps.stmt = NULL;
}

void CRUDapi::DB::setAuthProps(string server, string username, string password)
{
    authProps.server = server;
    authProps.username = username;
    authProps.password = password;
}

bool CRUDapi::DB::DBconnect(string server, string username, string password)
{
    try
    {
        if (connProps.con != NULL)
            delete connProps.con;

        connProps.driver = get_driver_instance();
        connProps.con = connProps.driver->connect(server, username, password);
        setAuthProps(server, username, password);
    }
    catch (sql::SQLException e)
    {
        cout << "Could not connect to server. Error message: " << e.what() << endl;
        system("pause");
        exit(1);
    }

    return true;
}

void CRUDapi::DB::DBdisconnect()
{
    if (connProps.stmt != NULL)
        delete connProps.stmt;

    if (connProps.con != NULL)
        delete connProps.con;
}

bool CRUDapi::DB::DBsetSchema(string schemaName)
{
    //catch errors!!!
    connProps.con->setSchema(schemaName);
}

bool CRUDapi::DB::tsql(string transact)
{
    if (connProps.con == NULL)
        return false;

    if (connProps.stmt == NULL)
        connProps.stmt = connProps.con->createStatement();

    connProps.stmt->execute(transact);

    //catch errors!!!

    return true;
}
//==============================================================================
CRUDapi::API::API(DB* CRUDDB)
{
    this->CRUDDB = CRUDDB;
}

bool CRUDapi::API::Read(string reqUrl)
{
    CRUDDB->tsql();

    return true;
}
