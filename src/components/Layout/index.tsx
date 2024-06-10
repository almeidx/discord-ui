import React, { type FC } from "react";

import { Grid } from "./styles";

import ChannelData from "../ChannelData";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import GuildList from "../GuildList";
import GuildName from "../GuildName";
import UserInfo from "../UserInfo";
import UserList from "../UserList";

const Layout: FC = () => {
	return (
		<Grid>
			<GuildList />
			<GuildName />
			<ChannelInfo />
			<ChannelList />
			<UserInfo />
			<ChannelData />
			<UserList />
		</Grid>
	);
};

export default Layout;
