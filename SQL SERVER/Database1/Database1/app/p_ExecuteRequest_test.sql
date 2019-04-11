-- =============================================
-- Author:		MJ
-- Create date: 2019-04-07
-- Description:	testing the application
-- =============================================
CREATE PROCEDURE [app].[p_ExecuteRequest_test]
	@p_Commit bit = 0
AS
BEGIN
	SET XACT_ABORT, NOCOUNT ON
	
	BEGIN TRY
	
	DECLARE 
		  @RequestHeader varchar(max)
		, @RequestBody nvarchar(max)
		, @Err int

	SET @RequestHeader = '{"requestName":"test","appName":"TEST","userName":"tester","dateTime":"2019-04-11T13:18:56.629Z"}'
	SET @RequestBody  = '{"name":"Michal+Jána,+Creasoft,+s.r.o.","e-mail":"michal.jana@hotmail.com","submit":"Valider"}'


	EXEC @Err = [app].[p_ExecuteRequest] 
		  @p_RequestHeader = @RequestHeader
		, @p_RequestBody = @RequestBody
	SELECT @Err
	
	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION
		EXEC dbo.p_Error_Handler
		RETURN 55555
	END CATCH
END

GO
GRANT EXECUTE
    ON OBJECT::[app].[p_ExecuteRequest_test] TO [appREST]
    AS [dbo];

