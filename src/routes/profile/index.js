import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
	return (
		<div class={style.profile}>
			<h1>Profile: {user}</h1>
			<p>This is the user profile for a user named { user }, a developer of Electron Arcade.</p>
			<p>Visit his <a href={(user==="sKaiCzar") ? "https://github.com/sKaiCzar" : "https://github.com/Rajiv7479"}>github profile.</a></p>
		</div>
	);
}

export default Profile;
