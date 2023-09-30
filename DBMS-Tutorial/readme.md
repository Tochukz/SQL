# DBMS Tutorial – Database Management System
[GeeksForGeeks DBMS Tutorial](https://www.geeksforgeeks.org/dbms/)  

## Chapter 1: Basic DBMS
### Introduction of DBMS
__Introduction__  
There are four types of Data Languages
1. Data Definition Language (DDL)
2. Data Manipulation Language (DML)
3. Data Control Language (DCL)
4. Transactional Control Language (TCL)


 __Data Definition Language (DDL)__  
 Data Definition Language deals with database schemas and descriptions, of how the data should reside in the database. Examples of DDL operations includes:
 * CREATE
 * ALTER
 * DROP
 * TRUNCATE
 * COMMENT
 * RENAME


 __Data Manipulation Language (DML)__  
 Data Manipulation Language deals with data manipulation and includes most common SQL statements such as
 * SELECT
 * INSERT,
 * UPDATE,
 * DELETE
 * MERGE (UPSERT)
 * CALL
 * EXPLAIN PLAN
 * LOCK TABLE

__Data Control Language (DCL)__   
Data Control Language acts as an access specifier to the database to grant and revoke permissions to users in the database. Examples of DCL operations are
* GRANT
* REVOKE

__Transactional Control Language (TCL)__  
Transactional Control Language acts as a manager for all types of transactional data and all transactions. Some of the command of TCL are
* Roll Back
* Commit
* Save Point

__Problem with File System Data Management__   
File System manages data using files on a hard disk. Users are allowed to create, delete, and update the files according to their requirements. The problems with File System are as follows:
1. Redundancy of data
2. Inconsistency of Data
3. Difficult Data Access
4. Unauthorized Access
5. No Concurrent Access
6. No Backup and Recovery

These problems are addressed by a DBMS.

__Advantages of using a DBMS__
1. Data organization
2. Data integrity
3. Concurrent access
4. Data security
5. Backup and recovery
6. Data sharing

__Disadvantages of using a DBMS__
1. Complexity
2. Performance overhead
3. Scalability
4. Cost
5. Limited use cases

__Types of DBMS__  
1. __Relational DBMS (RDBMS)__: stores data in tables with rows and columns, and uses SQL to manipulate the data.
2. __Object-Oriented DBMS (OODBMS)__: stores data as objects, which can be manipulated using object-oriented programming languages.
3. __NoSQL DBMS__: stores data in non-relational data structures, such as key-value pairs, document-based models, or graph models.  

### DBMS Architecture 1-level, 2-Level, 3-Level
__Types of DBMS Architecture__
* 1-Tier Architecture
* 2-Tier Architecture
* 3-Tier Architecture

__1-Tier Architecture__  
In 1-Tier Architecture the database is directly available to the user, the user can directly sit on the DBMS and use it. The client, server, and Database are all present on the same machine.  

__2-Tier Architecture__  
The 2-tier architecture is similar to a basic _client-server_ model. The application at the client end directly communicates with the database on the server side. APIs like _ODBC_ and _JDBC_ are used for this interaction.

__3-Tier Architecture__  
In 3-Tier Architecture, there is another layer between the client and the server. The client does not directly communicate with the server. Instead, it interacts with an application server which further communicates with the database system.

### Introduction of 3-Tier Architecture in DBMS
__DBMS 3-tier Architecture__   
DBMS 3-tier architecture divides the complete system into three inter-related but independent modules:
1. __Physical Level__: At the physical level, the information about the location of database objects in the data store is kept. Physical level of a database describes how the data is being stored in secondary storage devices like disks and tapes and also gives insights on additional storage details.
2. __Conceptual Level__: At conceptual level, data is represented in the form of various database tables. Also referred as logical schema, it describes what kind of data is to be stored in the database.
3. __External Level__: An external level specifies a view of the data in terms of conceptual level tables. The main focus of external level is data abstraction.

__Data Independence__  
Data independence means a change of data at one level should not affect another level. Two types of data independence:
1. __Physical Data Independence__: Any change in the physical location of tables and indexes should not affect the conceptual level or external view of data.
2. __Conceptual Data Independence__: The data at conceptual level schema and external level schema must be independent. This means a change in conceptual schema should not affect external schema

### Links
1. [Introduction of DBMS](https://www.geeksforgeeks.org/introduction-of-dbms-database-management-system-set-1/)
2. [Introduction of 3-Tier Architecture](https://www.geeksforgeeks.org/introduction-of-3-tier-architecture-in-dbms-set-2/)  
[DBMS Architecture](https://www.geeksforgeeks.org/dbms-architecture-2-level-3-level/)

[GeeksForGeeks Quiz](https://www.geeksforgeeks.org/quiz-corner-gq/)
