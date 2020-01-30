import React from 'react';
import Mediatiles from '../../../components/mediatiles'
import Container from '../../../templates/container';


const Media = (props) => {
	return (
		<Container title="Media" subtitle="Pictures for all ILITE events." bannerImage="media__banner">
			<div className="media">
				<p className="media__text">
					At ILITE Robotics, we have promising videographers who take lots of film of our team’s activities.
					They capture our effervescent and interesting teammates working, learning, and even playing.
					ILITE media can be viewed below.
				</p>
				<div className="media_tiles">
					<Mediatiles
						url="https://www.dropbox.com/home/2020/FRC/IROC/Competition/IROC%20Photos"
						name="IROC 2019"
					/>
					<Mediatiles
						url="https://www.dropbox.com/sh/dxw446rwjxbr3l1/AABv9Rj9KeImwglQQVMsBdOGa?dl=0"
						name="Chesapeake District Championship 2019"
					/>
					<Mediatiles
						url="https://www.dropbox.com/sh/cz40n8q52jn744d/AAAB4EifOJX0ez9XwzR13JGya?dl=0"
						name="Chesapeake District Oxon Hill 2019"
					/>
					<Mediatiles
						url="https://www.dropbox.com/sh/xl9r8ia82b2fv8w/AABnsswvWDVgr-5-Csmo69N9a?dl=0"
						name="Chesapeake District Bethesda 2019"
					/>
					<Mediatiles
						url="https://www.dropbox.com/sh/gcz1mrw3diyq5zg/AABkahl0uCbqUlIGUeUbH6rMa?dl=0"
						name="Chesapeake District Haymarket 2019"
					/>
					<Mediatiles
						url="https://www.dropbox.com/sh/20p3csyqm4bakdf/AADylpobYtPtC0vpE9QaT7iia?dl=0"
						name="STEAM Expo 2019"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/n5vqlp9dyymxv82/AABDer7WXWucnOysP0UR1F7Ia?dl=0`}
						name="IROC 2018"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/slw0srbj68cuqce/AAA87ZVnyJmZeh3sOVkzZS7Ya/FRC%20Competition/Worlds?dl=0&subfolder_nav_tracking=1`}
						name="World Championship 2018"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/slw0srbj68cuqce/AAA4f5wfXL0RLTbhdL2DipWca/FRC%20Competition/District%20Champs?dl=0&subfolder_nav_tracking=1`}
						name="Chesapeake District Championships 2018"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/slw0srbj68cuqce/AAA-vesfsbGy1d2ga8FkVb4Ra/STEAM%20EXPO?dl=0&subfolder_nav_tracking=1s`}
						name="STEAM Expo 2018"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/slw0srbj68cuqce/AAAV54Fd78MFhY3AVd4lw_I4a/IROC%202017?dl=0&subfolder_nav_tracking=1`}
						name="IROC 2017"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/bbr2288z656ubhm/AADWSERCz8P0Ki5G4Wg93TOJa/FRC%20Robotics/2017%20World%20Championships?dl=0`}
						name="World Championship 2017"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/bbr2288z656ubhm/AAC3coZ6kps9M0sx7SwWxyBZa/FRC%20Robotics/Chesapeake%20District%20Championships?dl=0`}
						name="Chesapeake District Championship 2017"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/wck7mcgzcbv42qr/AADP_ez0oJeDZSYkUoq5gqSXa?dl=0`}
						name="IROC 2016"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/e54shc5s5fnoi48/AACkh9a7XvxGkllzuJn7NTZba?dl=0`}
						name="DC United 2016"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/jf3h2t6nborid9s/AADhUeMrDa7RpB0KDkxtJm4Ka?dl=0`}
						name="World Championship 2016"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/v7vzw69wnsn9sp7/AABcLQ560lXzyZKHNFUQoNoZa?dl=0`}
						name="Portsmouth FRC District 2016"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/nan3z5cw8w6jy2d/AACAj4koZIgp4ZPRkMMuOutta?dl=0`}
						name="Bethesda FRC District 2016"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/pl93yligwwxi79k/AACXnbKK1uly5si-rY4w_BbQa?dl=0`}
						name="Haymarket Day 2016"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/eiyrij42zkwfgbg/AABoaTOrG5zPs23rbvw1lRhNa?dl=0`}
						name="Holiday Party 2015"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/rrslobv7qt7v819/AABq_zFgvb_QP7PRxK3ME1Qxa?dl=0`}
						name="Haymarket Day 2015"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/rad7iytt71r2d6j/AACArDXkXrF5Pho-4wrUqSFBa?dl=0`}
						name="Battle of Baltimore 2015"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/186ak6or7mul4p8/AADOMWpvTgbBwv1bmqYPe8Dsa?dl=0`}
						name="DC United 2015"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/4in5ajkxk3u8zy7/AAARn9r7BsVriq3Hg5rg2EQJa?dl=0`}
						name="World Championship 2015"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/gq6jkcrbvvfhzi9/AAAKGEncJCXvJcllfk0l7E7Ma?dl=0`}
						name="Greater DC FRC Regional 2015"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/hnawubxlr9nkvt1/AAAt2H6lY0_uOPfCFPQcO1Jpa?dl=0`}
						name="Pennsylvania FRC Regional 2015"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/02qzoz3f5ezowyq/AABhjepRgm47CCE7ZA_znL8ta?dl=0`}
						name="First Annual STEM Expo 2015"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/uf9ghiqscxy0ghg/AADg9hycEve7X6NiO7fb9IbXa?dl=0`}
						name="DC United 2014"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/yz3vj51a6y9rcep/AAARomlxwK06Npf9tvSaLGvTa?dl=0`}
						name="Holiday Party 2014"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/u8quhmcjhi2706l/AAALHtRetrKviEZenhkcwlTJa?dl=0`}
						name="Haymarket FLL Regional 2014"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/94lslb7vj4mw73w/AACZd9eTJUFS7w3yZzeSFKt4a?dl=0`}
						name="IROC 2014"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/k0wkkj2276k5729/AAD4bPPYabaDhL5hUX5lupQca?dl=0`}
						name="Air and Scare 2014"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/ab117xfmrvvtsxo/AADcSsMzAKI-8jb_3dxlczIea?dl=0`}
						name="Haymarket Day 2014"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/pyartoatkpfdb9b/AAADlDSU7ibIFyQmM2I-EuUea?dl=0`}
						name="Naval IT Day 2014"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/pqyxlw3753jdisi/AADnYKSAJ7Y12F5lnWWBrgEfa?dl=0`}
						name="Helicopter Day 2014"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/vfc745doxuf8er9/AAD53lEetwCsST-WcV-qFysUa?dl=0`}
						name="Be-a-Pilot Day 2014"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/dbnajmfbhybr37m/AAC837RiqmKBffmsygt6qjaYa?dl=0`}
						name="World Championship 2014"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/kye8ibytw9vtb8t/AABxwdF1v_-Xxqog-QFGXvEHa?dl=0`}
						name="Chesapeake FRC Regional 2014"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/insoxna8ha4tw1y/AAB74o_EQ6Tqe2r9L-UI9W_ra?dl=0`}
						name="Washington DC FRC Regional 2014"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/v8p96bwrthnnvma/AADF3TMZfXwvYiGJUFzwa8OAa?dl=0`}
						name="Haymarket Day 2013"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/kg8768pdzqdnuw1/AAAb5Mm2QkU7gRZOXpz615R4a?dl=0`}
						name="IROC 2013"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/oygy5j0tx14ekke/AACkHEn7_2b03gYo-wXElePva?dl=0`}
						name="World Championship 2013"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/14pxrs7mky1swe3/AAB2SztBjuQe1vk_OFyZvMZba?dl=0`}
						name="DC United 2013"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/slo8lcwikpnjfuf/AABInE_zEewhzPSHKpIwj5iBa?dl=0`}
						name="Capitol Visit 2013"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/1ms5cwgjqvt296d/AADGNqW3uabzRnA8hgT54EO4a?dl=0`}
						name="Washington DC FRC Regional 2013"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/b6so8hcthvfw3te/AACqWjH6d0jkKnUngBRm3LRPa?dl=0`}
						name="Chesapeake FRC Regional 2013"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/z699uo0l49ap1ox/AAD9sYLQDONCwkcMLb7OynG4a?dl=0`}
						name="Holiday Party 2012"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/h8iivttsb8ilalo/AADzZnWsL1A5UNE0Hytuh2Baa?dl=0`}
						name="Air and Scare 2012"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/bxccyte4hczravp/AAA9b26bYQ2DLwJKt1m6DAY6a?dl=0`}
						name="World Championship 2012"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/qfk7esyerjkw4zh/AAAk7_Rr2Fn7THv8YDNjRz1Na?dl=0`}
						name="Pumpkin Pandemonium 2011"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/8x0yycr2p4ex3fr/AAAOVQQIkLrYUFB5XstPypf0a?dl=0`}
						name="World Championship 2011"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/8gh2adcsv6d990s/AABbJ_TqPuGNhuCQVRjeIjJoa?dl=0`}
						name="DC FRC Regional 2011"
					/>
					<Mediatiles
						url={`https://www.dropbox.com/sh/tvfad1er1hu70k4/AADH8OKyUe3qGXpaUHbCUMqla?dl=0`}
						name="Battle O’ Baltimore 2010"
					/>
				</div>
			</div>
		</Container>
	);
};

Media.propTypes = {

};

export default Media;
