-- =============================================
-- Author:		MJ
-- Create date: 2019-04-11
-- Description:	saves Sign up form
-- =============================================
CREATE PROCEDURE [app].[p_Execute_SaveSignUpForm] (
	@p_RequestHeader varchar(max)
	, @p_RequestBody nvarchar(max)
)
AS
BEGIN
	SET XACT_ABORT, NOCOUNT ON

	BEGIN TRY
	BEGIN TRANSACTION		
	
	DECLARE @RequestName nvarchar(50)
		
		SELECT
			RequestName
		FROM OPENJSON(@p_RequestBody)
		WITH (
			RequestName nvarchar(50) '$.requestName'		
		) AS RN
		
	
		IF @RequestName =   '/execute/saveSignUpForm'
		SELECT RequestName = 'Request '  + @RequestName + ' was executed.' 
	COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION
		EXEC dbo.p_Error_Handler
		RETURN 55555
	END CATCH		
END