import { Navigate, Route, Routes } from "react-router-dom";
import {
	ChangePasswordForm,
	CreateAccountForm,
	LoginForm,
	ResetPasswordForm,
} from "./components";
import { SingleCard } from "./layouts";

export default function UnauthenticatedContent() {
	return (
		<Routes>
			<Route
				path="/login"
				element={
					<SingleCard title="Sign In">
						<LoginForm />
					</SingleCard>
				}
			/>
			<Route
				path="/create-account"
				element={
					<SingleCard title="Sign Up">
						<CreateAccountForm />
					</SingleCard>
				}
			/>
			<Route
				path="/reset-password"
				element={
					<SingleCard
						title="Reset Password"
						description="Please enter the email address that you used to register, and we will send you a link to reset your password via Email."
					>
						<ResetPasswordForm />
					</SingleCard>
				}
			/>
			<Route
				path="/change-password/:recoveryCode"
				element={
					<SingleCard title="Change Password">
						<ChangePasswordForm />
					</SingleCard>
				}
			/>
			<Route path="*" element={<Navigate to={"/login"} />} />
		</Routes>
	);
}
