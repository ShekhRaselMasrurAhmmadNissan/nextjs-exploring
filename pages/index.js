import styles from '@/styles/Home.module.css';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div>
			<h1>This is Next app.</h1>
			<p>I am sure about this</p>
		</div>
	);
}
