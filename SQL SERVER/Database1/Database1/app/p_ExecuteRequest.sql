-- =============================================
-- Author:		MJ
-- Create date: 2019-04-07
-- Description:	Basic procedure for receiving requests from an application
-- =============================================
CREATE PROCEDURE [app].[p_ExecuteRequest] (
	@p_RequestHeader varchar(max)
	, @p_RequestBody nvarchar(max)
)
AS
BEGIN
	SET XACT_ABORT, NOCOUNT ON

	DECLARE @ExecuteRequestsID int;	

	INSERT INTO app.t_ExecuteRequests
		([Header], [Body])
	VALUES (
			@p_RequestHeader
		, @p_RequestBody
	)

	SET @ExecuteRequestsID = SCOPE_IDENTITY()
	
	BEGIN TRY
	BEGIN TRANSACTION
		DECLARE @RequestName nvarchar(50)

		SET @requestName = (
			SELECT
				RequestName
			FROM OPENJSON(@p_RequestHeader)
			WITH (
				RequestName nvarchar(50) '$.requestName'		
			) AS RN
		)
	
		IF @RequestName =   '/execute/saveSignUpForm'
		SELECT RequestName = 'Request '  + @RequestName + ' was executed.' 
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

