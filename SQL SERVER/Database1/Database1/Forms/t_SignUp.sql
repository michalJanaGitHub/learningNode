CREATE TABLE [Forms].[t_SignUp] (
    [ID]       INT            NOT NULL IDENTITY,
    [DateTime] DATETIME2(2)     NOT NULL DEFAULT GETDATE(),
    [Name]     NVARCHAR (100) NOT NULL,
    [Email]    VARCHAR (100)  UNIQUE NOT NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC)
);




