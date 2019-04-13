-- =============================================
-- Author:		MJ
-- Create date: 2019-04-07
-- Description:	Basic procedure for receiving requests from an application
-- =============================================
CREATE PROCEDURE [app].[p_ExecuteRequest] (
	  @p_ERId varchar(25)
	, @p_RequestHeader varchar(max)
	, @p_RequestBody nvarchar(max)
)
AS
BEGIN
	SET XACT_ABORT, NOCOUNT ON

	DECLARE @ExecuteRequestsID int;	

	INSERT INTO app.t_ExecuteRequests
		(ERId, [Header], [Body])
	VALUES (
		  @p_ERId
		, @p_RequestHeader
		, @p_RequestBody
	)

	SET @ExecuteRequestsID = SCOPE_IDENTITY()
	
	BEGIN TRY
	BEGIN TRANSACTION
		DECLARE @RequestName nvarchar(50)
		SELECT
			  @RequestName = RequestName
		FROM OPENJSON(@p_RequestHeader)
		WITH (
			  RequestName nvarchar(50) '$.requestName'	
		) AS RN
	
		IF @RequestName = '/execute/saveSignUpForm'
			EXEC app.p_Execute_SaveSignUpForm 
				  @p_ERId
				, @p_RequestHeader = @p_RequestHeader
				, @p_RequestBody = @p_RequestBody
		ELSE	
			SELECT
				  Result = 'Err'
				, [Message] = 'Unknown request'

	COMMIT TRANSACTION
	END TRY

	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION
		EXEC dbo.p_Error_Handler
			@p_SaveToLog = 1
			, @p_ExecuteRequestsID = @ExecuteRequestsID
		RETURN 55555
	END CATCH		
END
GO
GRANT EXECUTE
    ON OBJECT::[app].[p_ExecuteRequest] TO [appREST]
    AS [dbo];

