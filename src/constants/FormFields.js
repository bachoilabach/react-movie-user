const UserFields = [
	{
		label: 'Email',
		id: 'email',
		name: 'email',
		placeholder: 'Enter email',
		type: 'email',
		autoComplete: 'email',
		isRequired: true,
        disable: true,
		classExpand: 'cursor-not-allowed w-full'
	},
    {
		label: 'Full Name',
		id: 'fullName',
		name: 'fullName',
		placeholder: ' Enter user name',
		type: 'text',
		autoComplete: 'username',
		isRequired: true,
		classExpand: 'w-full'
	},
    {
		label: 'PhoneNumber',
		id: 'phoneNumber',
		name: 'phoneNumber',
		placeholder: 'Enter user PhoneNumber',
		type: 'number',
		autoComplete: 'email',
		isRequired: false,
		classExpand: 'w-full',
	},
    {
		label: 'Address',
		id: 'address',
		name: 'address',
		placeholder: 'Enter user address',
		type: 'text',
		autoComplete: 'address',
		isRequired: false,
		classExpand: 'w-[173%]',
	},
];

const actorFields = [
	{
		label: 'Name',
		id: 'name',
		name: 'name',
		placeholder: 'Enter actor name',
		type: 'text',
		autoComplete: 'name',
		isRequired: false,
		classExpand: 'w-full',
	},
	{
		label: 'Nationality',
		id: 'nationality',
		name: 'nationality',
		placeholder: 'Enter actor nationality',
		type: 'text',
		autoComplete: 'nationality',
		isRequired: false,
		classExpand: 'w-full',
	},
];

const movieFields = [
	{
		label: 'Title',
		id: 'title',
		name: 'title',
		placeholder: 'Enter movie title',
		type: 'text',
		autoComplete: 'title',
		isRequired: false,
		classExpand: 'w-[420px]',
	},
	{
		label: 'Video Url',
		id: 'videoURL',
		name: 'videoURL',
		placeholder: 'Enter videoURL',
		type: 'text',
		autoComplete: 'videoURL',
		isRequired: false,
		// classExpand: 'w-[270px]',
	},
	{
		label: 'HTML',
		id: 'html',
		name: 'html',
		placeholder: 'Enter html',
		type: 'text',
		autoComplete: 'html',
		isRequired: false,
		// classExpand: 'w-[270px]',
	},
]

export { UserFields, actorFields, movieFields };
