const loginFields = [
	{
		labelText: 'Email address',
		labelFor: 'email-address',
		id: 'email-address',
		name: 'email',
		type: 'email',
		autoComplete: 'email',
		isRequired: true,
		placeholder: 'Email address',
		customClass: 'bg-[#333333] text-white',
	},
	{
		labelText: 'Password',
		labelFor: 'password',
		id: 'password',
		name: 'password',
		type: 'password',
		autoComplete: 'current-password',
		isRequired: true,
		placeholder: 'Password',
		customClass: 'bg-[#333333] text-white',
	},
];

const signupFields = [
	{
		labelText: 'Email address',
		labelFor: 'email-address',
		id: 'email-address',
		name: 'email',
		type: 'email',
		autoComplete: 'email',
		isRequired: true,
		placeholder: 'Email address',
		customClass: 'bg-[#333333] text-white',
	},
	{
		labelText: 'Password',
		labelFor: 'password',
		id: 'password',
		name: 'password',
		type: 'password',
		autoComplete: 'current-password',
		isRequired: true,
		placeholder: 'Password',
		customClass: 'bg-[#333333] text-white',
	},
	{
		labelText: 'Confirm Password',
		labelFor: 'confirm-password',
		id: 'confirm_password',
		name: 'confirm_password',
		type: 'password',
		autoComplete: 'confirm_password',
		isRequired: true,
		placeholder: 'Confirm Password',
		customClass: 'bg-[#333333] text-white',
	},
];

const ForgotPwFields = [
	{
		labelText: 'Email address',
		labelFor: 'email-address',
		id: 'email-address',
		name: 'email',
		type: 'email',
		autoComplete: 'email',
		isRequired: true,
		placeholder: 'Email address',
		customClass: 'bg-[#333333] text-white',
	},
];

export { loginFields, signupFields, ForgotPwFields };
