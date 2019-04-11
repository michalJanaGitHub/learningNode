-- =============================================
-- Author:		MJ
-- Create date: 2019-04-10
-- Description:	error handling procedure from sommarskog
-- =============================================
CREATE PROCEDURE [dbo].[p_Error_Handler]
	@p_SaveToLog bit = 0 
	, @p_ExecuteRequestsID int = NULL
AS
BEGIN
	DECLARE 
		@errmsg   nvarchar(2048),
		@severity tinyint,
		@state    tinyint,
		@errno    int,
		@proc     sysname,
		@lineno   int
           
	SELECT 
		@errmsg = error_message()
		, @severity = error_severity()
		, @state = error_state()
		, @errno = error_number()
		, @proc = error_procedure()
		, @lineno = error_line()
       
	IF @errmsg NOT LIKE '***%'
	BEGIN
		SELECT @errmsg = 
			'*** ' 
			+ COALESCE(QUOTENAME(@proc), '<dynamic SQL>') 
			+ ', Line ' + LTRIM(STR(@lineno)) 
			+ '. Errno ' + LTRIM(STR(@errno)) 
			+ ': '
			+ @errmsg
	END
	IF @p_saveToLog = 1
	BEGIN
		INSERT INTO app.t_ExecuteRequests_Errors
			(ExecuteRequestsID, ErrNo, ErrSeverity, ErrMessage)
		VALUES
			(@p_ExecuteRequestsID, @errno, @severity, @errmsg)			
	END
	RAISERROR('%s', @severity, @state, @errmsg)
END
