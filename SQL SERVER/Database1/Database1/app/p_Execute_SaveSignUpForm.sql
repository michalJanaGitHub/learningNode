-- =============================================
-- Author:		MJ
-- Create date: 2019-04-11
-- Description:	saves Sign up form
-- =============================================
CREATE PROCEDURE [app].[p_Execute_SaveSignUpForm] (
	  @p_ERId varchar(25)
	, @p_RequestHeader varchar(max)
	, @p_RequestBody nvarchar(max)
)
AS
BEGIN
	SET XACT_ABORT, NOCOUNT ON

	BEGIN TRY
	BEGIN TRANSACTION	

		DECLARE 
			@Email varchar(100)
		SELECT
			    @Email = Email
		FROM OPENJSON(@p_RequestBody)
		WITH (
			  [Name] nvarchar(100) '$.name'
			, Email Varchar(100) '$.email'
		) AS RB

		IF NOT EXISTS(
			SELECT 1 
			FROM Forms.t_SignUp
			WHERE Email = @Email
		)
			BEGIN
				INSERT INTO Forms.t_SignUp
					([Name], Email)
				SELECT
					  [Name]
					, Email
				FROM OPENJSON(@p_RequestBody)
				WITH (
					  [Name] nvarchar(100) '$.name'
					, Email varchar(100) '$.email'
				) AS RB

				SELECT
					  ERId = @p_ERId
					, Result = 'OK'
					, [Message] = 'User was registerd successfully'
			END			
		ELSE
			BEGIN
				SELECT
					  ERId = @p_ERId
					, Result = 'Err'
					, [Message] = 'Email already registered'			
			END
	COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION
		EXEC dbo.p_Error_Handler
		RETURN 55555
	END CATCH		
END