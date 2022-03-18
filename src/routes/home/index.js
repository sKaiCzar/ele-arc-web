import { h, p, button, a, br } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<div class={style.nada}>
			<h1>The Arcade you lost.</h1>
			<h3>Click the image to go to the download website</h3>
			<a href="https://app.box.com/s/rltfrwfj4y6k3qokba7xq6ivp6um2erm">
				<img src = '../../assets/ea.png'></img>
			</a>
			<p>
			<br />
			<br />
				Missing the old days where you could play all you want in an Arcade?
			<br />
				Here comes an Arcade designed for you to play on your device!!
			</p>
			
		</div>
	</div>
);

export default Home;
