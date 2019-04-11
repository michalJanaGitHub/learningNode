CREATE TABLE [Forms].[t_Registration] (
    [Id]    INT            NOT NULL,
    [email] VARCHAR (100)  NOT NULL,
    [name]  NVARCHAR (150) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    UNIQUE NONCLUSTERED ([email] ASC)
);

