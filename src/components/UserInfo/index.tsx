import React, { type FC } from "react";

import {
	Avatar,
	Container,
	HeadsetIcon,
	Icons,
	MicIcon,
	Profile,
	SettingsIcon,
	UserData,
} from "./styles";

const UserInfo: FC = () => {
	return (
		<Container>
			<Profile>
				<Avatar />
				<UserData>
					<strong>Almeida</strong>
					<span>#0001</span>
				</UserData>
			</Profile>

			<Icons>
				<MicIcon />
				<HeadsetIcon />
				<SettingsIcon />
			</Icons>
		</Container>
	);
};

export default UserInfo;
