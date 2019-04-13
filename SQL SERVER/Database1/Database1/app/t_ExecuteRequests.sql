CREATE TABLE [app].[t_ExecuteRequests] (
    [Id]		INT IDENTITY (1, 1) NOT NULL,
    [ERId]		VARCHAR(25) NULL, 
    [DateTime]	DATETIME2 (1) CONSTRAINT [DF_t_ExecuteRequests_DateTime] DEFAULT (GETDATE()) NOT NULL,
    [Header]	NVARCHAR (MAX) NOT NULL,
    [Body]		NVARCHAR (MAX) NOT NULL,
    CONSTRAINT [PK_t_ExecuteRequests] PRIMARY KEY CLUSTERED ([Id] ASC)
);

