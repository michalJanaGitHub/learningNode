CREATE TABLE [Employees].[t_Employees] (
    [ID]           INT             IDENTITY (1, 1) NOT NULL,
    [Number]       NVARCHAR (8)    COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    [Name]         NVARCHAR (100)  COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
    [Salary]       DECIMAL (10, 2) NOT NULL,
    [DepartmentID] INT             NOT NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC)
);

