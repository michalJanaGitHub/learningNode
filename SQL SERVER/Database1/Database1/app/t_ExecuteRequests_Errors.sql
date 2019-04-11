CREATE TABLE [app].[t_ExecuteRequests_Errors] (
    [Id]                INT             IDENTITY (1, 1) NOT NULL,
    [DateTime]          DATETIME2 (1)   CONSTRAINT [DF_t_ExecuteRequests_Errors_DateTime] DEFAULT (getdate()) NOT NULL,
    [ExecuteRequestsID] INT             NOT NULL,
    [ErrNo]             INT             NOT NULL,
    [ErrSeverity]       INT             NOT NULL,
    [ErrMessage]        NVARCHAR (4000) NOT NULL,
    CONSTRAINT [PK_t_ExecuteRequests_Errors] PRIMARY KEY CLUSTERED ([Id] ASC)
);

