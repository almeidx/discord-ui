import React, { type FC } from "react";

import { Avatar, Container, Role, User } from "./styles";

interface UserOptions {
	displayName: string;
	isBot?: boolean;
}

const UserRow: FC<UserOptions> = ({ displayName, isBot }) => {
	return (
		<User>
			<Avatar className={isBot ? "bot" : ""} />

			<strong>{displayName}</strong>

			{isBot && <span>Bot</span>}
		</User>
	);
};

const UserList: FC = () => {
	return (
		<Container>
			<Role>Online - 1</Role>
			<UserRow displayName="Almeida" />

			<Role>Offline - 10</Role>
			<UserRow displayName="Almeida 2" isBot />
			<UserRow displayName="Almeida 3" />
			<UserRow displayName="Almeida 4" />
			<UserRow displayName="Almeida 5" isBot />
			<UserRow displayName="Almeida 6" />
			<UserRow displayName="Almeida 7" />
			<UserRow displayName="Almeida 8" />
			<UserRow displayName="Almeida 9" isBot />
			<UserRow displayName="Almeida 10" />
			<UserRow displayName="Almeida 11" />
		</Container>
	);
};

export default UserList;
