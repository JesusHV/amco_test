API amco_test
---

Api gets last five tweats relational of a word

* `host` - http://api-twets.herokuapp.com

## Get twets by word
### /twet/:word
* `word` - indicates word key to find twets `required`

Example request
- http://api-twets.herokuapp.com/twet/claro video

Example response:
```
{
	"statuses": [{
		"created_at": "Thu Jun 23 23:54:43 +0000 2016",
		"id": 746129388400447500,
		"id_str": "746129388400447488",
		"text": "Gostei de um vídeo @YouTube https://t.co/gQ1RLULOGC! Batsy Claro Monster High Custom OOAK",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [{
				"screen_name": "YouTube",
				"name": "YouTube",
				"id": 10228272,
				"id_str": "10228272",
				"indices": [19, 27]
			}],
			"urls": [{
				"url": "https://t.co/gQ1RLULOGC",
				"expanded_url": "http://youtu.be/uCmDOdcKKwg?aRepaint",
				"display_url": "youtu.be/uCmDOdcKKwg?aR…",
				"indices": [28, 51]
			}]
		},
		"metadata": {
			"iso_language_code": "pt",
			"result_type": "recent"
		},
		"source": "<a href=\"http://www.google.com/\" rel=\"nofollow\">Google</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 216133284,
			"id_str": "216133284",
			"name": "rebeca vieira",
			"screen_name": "becka_vieira",
			"location": "PE/ BR",
			"description": "desde 1992, até sabe lá Deus quando!",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 24,
			"friends_count": 46,
			"listed_count": 0,
			"created_at": "Mon Nov 15 21:50:49 +0000 2010",
			"favourites_count": 8,
			"utc_offset": -7200,
			"time_zone": "Greenland",
			"geo_enabled": false,
			"verified": false,
			"statuses_count": 1646,
			"lang": "pt",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "C0DCF1",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000172073851/H9nXIjdN.jpeg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000172073851/H9nXIjdN.jpeg",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/556258018296217600/HtzwoqYI_normal.jpeg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/556258018296217600/HtzwoqYI_normal.jpeg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/216133284/1390315004",
			"profile_link_color": "C0DCF1",
			"profile_sidebar_border_color": "FFFFFF",
			"profile_sidebar_fill_color": "1C1C1C",
			"profile_text_color": "5C91B9",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 0,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "pt"
	}, {
		"created_at": "Thu Jun 23 23:54:04 +0000 2016",
		"id": 746129226756132900,
		"id_str": "746129226756132864",
		"text": "@leoteccomputer anda el del vídeo me suena ......\n\nClaro si soy yo, que vídeo mas bonito me quedo",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [{
				"screen_name": "leoteccomputer",
				"name": "Leotec",
				"id": 259242412,
				"id_str": "259242412",
				"indices": [0, 15]
			}],
			"urls": []
		},
		"metadata": {
			"iso_language_code": "es",
			"result_type": "recent"
		},
		"source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
		"in_reply_to_status_id": 746128530212261900,
		"in_reply_to_status_id_str": "746128530212261891",
		"in_reply_to_user_id": 259242412,
		"in_reply_to_user_id_str": "259242412",
		"in_reply_to_screen_name": "leoteccomputer",
		"user": {
			"id": 731183305169719300,
			"id_str": "731183305169719297",
			"name": "HardwareSfera",
			"screen_name": "HardwareSfera",
			"location": "",
			"description": "",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 26,
			"friends_count": 237,
			"listed_count": 1,
			"created_at": "Fri May 13 18:04:19 +0000 2016",
			"favourites_count": 44,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": false,
			"verified": false,
			"statuses_count": 144,
			"lang": "es",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "F5F8FA",
			"profile_background_image_url": null,
			"profile_background_image_url_https": null,
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/739113347019313153/o2b387U9_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/739113347019313153/o2b387U9_normal.jpg",
			"profile_link_color": "2B7BB9",
			"profile_sidebar_border_color": "C0DEED",
			"profile_sidebar_fill_color": "DDEEF6",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": true,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"is_quote_status": false,
		"retweet_count": 0,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"lang": "es"
	}, {
		"created_at": "Thu Jun 23 23:53:59 +0000 2016",
		"id": 746129206472511500,
		"id_str": "746129206472511488",
		"text": "RT @RETachira: VERGÜENZA\nEso causó Delcy en solo 6 segundos, dejo claro que no le importa carencias del pueblo Venezolano MENTIROSA https:/…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [{
				"screen_name": "RETachira",
				"name": "RESISTENCIA TÁCHIRA",
				"id": 2365028970,
				"id_str": "2365028970",
				"indices": [3, 13]
			}],
			"urls": [],
			"media": [{
				"id": 746064696516587500,
				"id_str": "746064696516587520",
				"indices": [139, 140],
				"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/746064696516587520/pu/img/L85YVI_zQZ7B8Peu.jpg",
				"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/746064696516587520/pu/img/L85YVI_zQZ7B8Peu.jpg",
				"url": "https://t.co/lgRd2URKGj",
				"display_url": "pic.twitter.com/lgRd2URKGj",
				"expanded_url": "http://twitter.com/delgadomaite/status/746064777554780160/video/1",
				"type": "photo",
				"sizes": {
					"small": {
						"w": 340,
						"h": 340,
						"resize": "fit"
					},
					"thumb": {
						"w": 150,
						"h": 150,
						"resize": "crop"
					},
					"large": {
						"w": 640,
						"h": 640,
						"resize": "fit"
					},
					"medium": {
						"w": 600,
						"h": 600,
						"resize": "fit"
					}
				},
				"source_status_id": 746064777554780200,
				"source_status_id_str": "746064777554780160",
				"source_user_id": 104320800,
				"source_user_id_str": "104320800"
			}]
		},
		"metadata": {
			"iso_language_code": "es",
			"result_type": "recent"
		},
		"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 2249424978,
			"id_str": "2249424978",
			"name": "Angela",
			"screen_name": "auriscorrea",
			"location": "",
			"description": "Luchadora, 100% opositora!!",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 100,
			"friends_count": 236,
			"listed_count": 0,
			"created_at": "Mon Dec 16 22:47:58 +0000 2013",
			"favourites_count": 177,
			"utc_offset": null,
			"time_zone": null,
			"geo_enabled": false,
			"verified": false,
			"statuses_count": 2140,
			"lang": "es",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "47FA00",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/378800000178883846/g-1klqVH.jpeg",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/378800000178883846/g-1klqVH.jpeg",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/429261143756906496/OuuL21sA_normal.jpeg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/429261143756906496/OuuL21sA_normal.jpeg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/2249424978/1391178469",
			"profile_link_color": "FAA700",
			"profile_sidebar_border_color": "000000",
			"profile_sidebar_fill_color": "DDEEF6",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Thu Jun 23 20:03:30 +0000 2016",
			"id": 746071202670719000,
			"id_str": "746071202670718976",
			"text": "VERGÜENZA\nEso causó Delcy en solo 6 segundos, dejo claro que no le importa carencias del pueblo Venezolano MENTIROSA https://t.co/lgRd2URKGj",
			"truncated": false,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [],
				"urls": [],
				"media": [{
					"id": 746064696516587500,
					"id_str": "746064696516587520",
					"indices": [117, 140],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/746064696516587520/pu/img/L85YVI_zQZ7B8Peu.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/746064696516587520/pu/img/L85YVI_zQZ7B8Peu.jpg",
					"url": "https://t.co/lgRd2URKGj",
					"display_url": "pic.twitter.com/lgRd2URKGj",
					"expanded_url": "http://twitter.com/delgadomaite/status/746064777554780160/video/1",
					"type": "photo",
					"sizes": {
						"small": {
							"w": 340,
							"h": 340,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"large": {
							"w": 640,
							"h": 640,
							"resize": "fit"
						},
						"medium": {
							"w": 600,
							"h": 600,
							"resize": "fit"
						}
					},
					"source_status_id": 746064777554780200,
					"source_status_id_str": "746064777554780160",
					"source_user_id": 104320800,
					"source_user_id_str": "104320800"
				}]
			},
			"metadata": {
				"iso_language_code": "es",
				"result_type": "recent"
			},
			"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 2365028970,
				"id_str": "2365028970",
				"name": "RESISTENCIA TÁCHIRA",
				"screen_name": "RETachira",
				"location": "Táchira, Venezuela.",
				"description": "Construyendo el nuevo país, trabajando desde la calle para informar al Mundo y crear consciencia. Somos Estudiantes en Resistencia. AQUÍ TÁCHIRA HABLA",
				"url": "https://t.co/5DEdzZpt6i",
				"entities": {
					"url": {
						"urls": [{
							"url": "https://t.co/5DEdzZpt6i",
							"expanded_url": "https://www.facebook.com/pages/Resistencia-Estudiantil-del-T%C3%A1chira/371484639660000?ref=hl",
							"display_url": "facebook.com/pages/Resisten…",
							"indices": [0, 23]
						}]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 48792,
				"friends_count": 315,
				"listed_count": 133,
				"created_at": "Fri Feb 28 04:00:54 +0000 2014",
				"favourites_count": 5260,
				"utc_offset": -16200,
				"time_zone": "Caracas",
				"geo_enabled": false,
				"verified": false,
				"statuses_count": 5890,
				"lang": "es",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "C0DEED",
				"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/685196625682272257/uXageQ9M_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/685196625682272257/uXageQ9M_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/2365028970/1449641985",
				"profile_link_color": "0084B4",
				"profile_sidebar_border_color": "C0DEED",
				"profile_sidebar_fill_color": "DDEEF6",
				"profile_text_color": "333333",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": true,
				"default_profile_image": false,
				"following": false,
				"follow_request_sent": false,
				"notifications": false
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 677,
			"favorite_count": 90,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "es"
		},
		"is_quote_status": false,
		"retweet_count": 677,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "es"
	}, {
		"created_at": "Thu Jun 23 23:53:39 +0000 2016",
		"id": 746129120833192000,
		"id_str": "746129120833191936",
		"text": "RT @VoluntadPopular: El caso de @leopoldolopez es un claro ejemplo de lo que nunca debe ocurrir en un proceso judicial penal [VIDEO] https:…",
		"truncated": false,
		"entities": {
			"hashtags": [],
			"symbols": [],
			"user_mentions": [{
				"screen_name": "VoluntadPopular",
				"name": "Voluntad Popular",
				"id": 77103484,
				"id_str": "77103484",
				"indices": [3, 19]
			}, {
				"screen_name": "leopoldolopez",
				"name": "Leopoldo López",
				"id": 42434332,
				"id_str": "42434332",
				"indices": [32, 46]
			}],
			"urls": [{
				"url": "https://t.co/cgKTA4KTw1",
				"expanded_url": "https://www.youtube.com/watch?v=U1OkeMvIqws",
				"display_url": "youtube.com/watch?v=U1OkeM…",
				"indices": [139, 140]
			}]
		},
		"metadata": {
			"iso_language_code": "es",
			"result_type": "recent"
		},
		"source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 2484497950,
			"id_str": "2484497950",
			"name": "Ismael Mata",
			"screen_name": "IsmaelMataVP",
			"location": "El Paraiso, Caracas, Venezuela",
			"description": "Estudiante de Comunicación Social #Usemista | Lucho por la Paz y el Progreso de #Venezuela |Activista Juvenil de Voluntad Popular| ¡Construyendo #LaMejorVzla!",
			"url": "https://t.co/F4eeZ4WK9z",
			"entities": {
				"url": {
					"urls": [{
						"url": "https://t.co/F4eeZ4WK9z",
						"expanded_url": "https://twitter.com/JVPCaracas",
						"display_url": "twitter.com/JVPCaracas",
						"indices": [0, 23]
					}]
				},
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 751,
			"friends_count": 750,
			"listed_count": 8,
			"created_at": "Mon Apr 14 16:16:16 +0000 2014",
			"favourites_count": 11,
			"utc_offset": 7200,
			"time_zone": "Belgrade",
			"geo_enabled": true,
			"verified": false,
			"statuses_count": 16376,
			"lang": "es",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "000000",
			"profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile": false,
			"profile_image_url": "http://pbs.twimg.com/profile_images/704460063641980928/jw-_L_uT_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/704460063641980928/jw-_L_uT_normal.jpg",
			"profile_banner_url": "https://pbs.twimg.com/profile_banners/2484497950/1461460254",
			"profile_link_color": "FF691F",
			"profile_sidebar_border_color": "000000",
			"profile_sidebar_fill_color": "000000",
			"profile_text_color": "000000",
			"profile_use_background_image": false,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Thu Jun 23 22:00:25 +0000 2016",
			"id": 746100623137972200,
			"id_str": "746100623137972224",
			"text": "El caso de @leopoldolopez es un claro ejemplo de lo que nunca debe ocurrir en un proceso judicial penal [VIDEO] https://t.co/cgKTA4KTw1",
			"truncated": false,
			"entities": {
				"hashtags": [],
				"symbols": [],
				"user_mentions": [{
					"screen_name": "leopoldolopez",
					"name": "Leopoldo López",
					"id": 42434332,
					"id_str": "42434332",
					"indices": [11, 25]
				}],
				"urls": [{
					"url": "https://t.co/cgKTA4KTw1",
					"expanded_url": "https://www.youtube.com/watch?v=U1OkeMvIqws",
					"display_url": "youtube.com/watch?v=U1OkeM…",
					"indices": [112, 135]
				}]
			},
			"metadata": {
				"iso_language_code": "es",
				"result_type": "recent"
			},
			"source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 77103484,
				"id_str": "77103484",
				"name": "Voluntad Popular",
				"screen_name": "VoluntadPopular",
				"location": "Venezuela",
				"description": "Cuenta oficial de Voluntad Popular. Luchamos día a día sin descanso por #LaMejorVzla donde todos los derechos sean para todas las personas",
				"url": "https://t.co/txb6jP9GIV",
				"entities": {
					"url": {
						"urls": [{
							"url": "https://t.co/txb6jP9GIV",
							"expanded_url": "http://www.voluntadpopular.com",
							"display_url": "voluntadpopular.com",
							"indices": [0, 23]
						}]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 861704,
				"friends_count": 53237,
				"listed_count": 2205,
				"created_at": "Fri Sep 25 01:50:22 +0000 2009",
				"favourites_count": 3530,
				"utc_offset": -16200,
				"time_zone": "Caracas",
				"geo_enabled": true,
				"verified": false,
				"statuses_count": 103507,
				"lang": "es",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "F78E1E",
				"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/513802776472588288/Z3DQZwkL.jpeg",
				"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/513802776472588288/Z3DQZwkL.jpeg",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/721465387628568577/PR7fMZnj_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/721465387628568577/PR7fMZnj_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/77103484/1461789867",
				"profile_link_color": "F58308",
				"profile_sidebar_border_color": "FFFFFF",
				"profile_sidebar_fill_color": "FFF4E8",
				"profile_text_color": "333333",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": false,
				"follow_request_sent": false,
				"notifications": false
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 69,
			"favorite_count": 15,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "es"
		},
		"is_quote_status": false,
		"retweet_count": 69,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "es"
	}, {
		"created_at": "Thu Jun 23 23:53:38 +0000 2016",
		"id": 746129115456090100,
		"id_str": "746129115456090112",
		"text": "RT @talkcyrus: #OTRAToday quando o harry deixou claro que perde o fã mas nao perde a piada https://t.co/f6zBaazMPU",
		"truncated": false,
		"entities": {
			"hashtags": [{
				"text": "OTRAToday",
				"indices": [15, 25]
			}],
			"symbols": [],
			"user_mentions": [{
				"screen_name": "talkcyrus",
				"name": "ㅤnic₊",
				"id": 4767066513,
				"id_str": "4767066513",
				"indices": [3, 13]
			}],
			"urls": [],
			"media": [{
				"id": 746043249853403100,
				"id_str": "746043249853403136",
				"indices": [91, 114],
				"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/746043249853403136/pu/img/lM_Eq4A5IegU_mu6.jpg",
				"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/746043249853403136/pu/img/lM_Eq4A5IegU_mu6.jpg",
				"url": "https://t.co/f6zBaazMPU",
				"display_url": "pic.twitter.com/f6zBaazMPU",
				"expanded_url": "http://twitter.com/talkcyrus/status/746043414609801216/video/1",
				"type": "photo",
				"sizes": {
					"small": {
						"w": 340,
						"h": 191,
						"resize": "fit"
					},
					"thumb": {
						"w": 150,
						"h": 150,
						"resize": "crop"
					},
					"medium": {
						"w": 600,
						"h": 338,
						"resize": "fit"
					},
					"large": {
						"w": 1024,
						"h": 576,
						"resize": "fit"
					}
				},
				"source_status_id": 746043414609801200,
				"source_status_id_str": "746043414609801216",
				"source_user_id": 4767066513,
				"source_user_id_str": "4767066513"
			}]
		},
		"metadata": {
			"iso_language_code": "pt",
			"result_type": "recent"
		},
		"source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id": null,
		"in_reply_to_status_id_str": null,
		"in_reply_to_user_id": null,
		"in_reply_to_user_id_str": null,
		"in_reply_to_screen_name": null,
		"user": {
			"id": 2579126525,
			"id_str": "2579126525",
			"name": "maria",
			"screen_name": "dragmeirish",
			"location": "",
			"description": "you know im always coming back to this place",
			"url": null,
			"entities": {
				"description": {
					"urls": []
				}
			},
			"protected": false,
			"followers_count": 2167,
			"friends_count": 1865,
			"listed_count": 5,
			"created_at": "Tue Jun 03 02:04:39 +0000 2014",
			"favourites_count": 1757,
			"utc_offset": -10800,
			"time_zone": "Buenos Aires",
			"geo_enabled": true,
			"verified": false,
			"statuses_count": 70810,
			"lang": "pt",
			"contributors_enabled": false,
			"is_translator": false,
			"is_translation_enabled": false,
			"profile_background_color": "1C1A1A",
			"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/640191914294255616/qOpf7KZb.png",
			"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/640191914294255616/qOpf7KZb.png",
			"profile_background_tile": true,
			"profile_image_url": "http://pbs.twimg.com/profile_images/745810983583686662/6yjziOVA_normal.jpg",
			"profile_image_url_https": "https://pbs.twimg.com/profile_images/745810983583686662/6yjziOVA_normal.jpg",
			"profile_link_color": "1C1A1A",
			"profile_sidebar_border_color": "FFFFFF",
			"profile_sidebar_fill_color": "EFEFEF",
			"profile_text_color": "333333",
			"profile_use_background_image": true,
			"has_extended_profile": false,
			"default_profile": false,
			"default_profile_image": false,
			"following": false,
			"follow_request_sent": false,
			"notifications": false
		},
		"geo": null,
		"coordinates": null,
		"place": null,
		"contributors": null,
		"retweeted_status": {
			"created_at": "Thu Jun 23 18:13:05 +0000 2016",
			"id": 746043414609801200,
			"id_str": "746043414609801216",
			"text": "#OTRAToday quando o harry deixou claro que perde o fã mas nao perde a piada https://t.co/f6zBaazMPU",
			"truncated": false,
			"entities": {
				"hashtags": [{
					"text": "OTRAToday",
					"indices": [0, 10]
				}],
				"symbols": [],
				"user_mentions": [],
				"urls": [],
				"media": [{
					"id": 746043249853403100,
					"id_str": "746043249853403136",
					"indices": [76, 99],
					"media_url": "http://pbs.twimg.com/ext_tw_video_thumb/746043249853403136/pu/img/lM_Eq4A5IegU_mu6.jpg",
					"media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/746043249853403136/pu/img/lM_Eq4A5IegU_mu6.jpg",
					"url": "https://t.co/f6zBaazMPU",
					"display_url": "pic.twitter.com/f6zBaazMPU",
					"expanded_url": "http://twitter.com/talkcyrus/status/746043414609801216/video/1",
					"type": "photo",
					"sizes": {
						"small": {
							"w": 340,
							"h": 191,
							"resize": "fit"
						},
						"thumb": {
							"w": 150,
							"h": 150,
							"resize": "crop"
						},
						"medium": {
							"w": 600,
							"h": 338,
							"resize": "fit"
						},
						"large": {
							"w": 1024,
							"h": 576,
							"resize": "fit"
						}
					}
				}]
			},
			"metadata": {
				"iso_language_code": "pt",
				"result_type": "recent"
			},
			"source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
			"in_reply_to_status_id": null,
			"in_reply_to_status_id_str": null,
			"in_reply_to_user_id": null,
			"in_reply_to_user_id_str": null,
			"in_reply_to_screen_name": null,
			"user": {
				"id": 4767066513,
				"id_str": "4767066513",
				"name": "ㅤnic₊",
				"screen_name": "talkcyrus",
				"location": "since18 os paozinhp",
				"description": "loUis LouIs Louis louks louisLouisLoui&slLouis LOUIS louIsalousio lOuIs lewis lOuismanic tommo loUIS",
				"url": "https://t.co/hTcfou5qH8",
				"entities": {
					"url": {
						"urls": [{
							"url": "https://t.co/hTcfou5qH8",
							"expanded_url": "https://twitter.com/zaynmalik/status/627757940330655744",
							"display_url": "twitter.com/zaynmalik/stat…",
							"indices": [0, 23]
						}]
					},
					"description": {
						"urls": []
					}
				},
				"protected": false,
				"followers_count": 12621,
				"friends_count": 9501,
				"listed_count": 37,
				"created_at": "Sun Jan 10 19:32:06 +0000 2016",
				"favourites_count": 1168,
				"utc_offset": -25200,
				"time_zone": "Pacific Time (US & Canada)",
				"geo_enabled": true,
				"verified": false,
				"statuses_count": 80026,
				"lang": "pt",
				"contributors_enabled": false,
				"is_translator": false,
				"is_translation_enabled": false,
				"profile_background_color": "000000",
				"profile_background_image_url": "http://pbs.twimg.com/profile_background_images/688982957718155264/QQ0l4Q_5.jpg",
				"profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/688982957718155264/QQ0l4Q_5.jpg",
				"profile_background_tile": false,
				"profile_image_url": "http://pbs.twimg.com/profile_images/746037702492053504/Nc2YPLeH_normal.jpg",
				"profile_image_url_https": "https://pbs.twimg.com/profile_images/746037702492053504/Nc2YPLeH_normal.jpg",
				"profile_banner_url": "https://pbs.twimg.com/profile_banners/4767066513/1466702774",
				"profile_link_color": "000000",
				"profile_sidebar_border_color": "000000",
				"profile_sidebar_fill_color": "000000",
				"profile_text_color": "000000",
				"profile_use_background_image": true,
				"has_extended_profile": false,
				"default_profile": false,
				"default_profile_image": false,
				"following": false,
				"follow_request_sent": false,
				"notifications": false
			},
			"geo": null,
			"coordinates": null,
			"place": null,
			"contributors": null,
			"is_quote_status": false,
			"retweet_count": 332,
			"favorite_count": 139,
			"favorited": false,
			"retweeted": false,
			"possibly_sensitive": false,
			"lang": "pt"
		},
		"is_quote_status": false,
		"retweet_count": 332,
		"favorite_count": 0,
		"favorited": false,
		"retweeted": false,
		"possibly_sensitive": false,
		"lang": "pt"
	}],
	"search_metadata": {
		"completed_in": 0.117,
		"max_id": 746129388400447500,
		"max_id_str": "746129388400447488",
		"next_results": "?max_id=746129115456090111&q=claro%20video&count=5&include_entities=1",
		"query": "claro+video",
		"refresh_url": "?since_id=746129388400447488&q=claro%20video&include_entities=1",
		"count": 5,
		"since_id": 0,
		"since_id_str": "0"
	},
	"searchWord": "viernes",
  "hashTags": [
      {
          "text": "ALaMexicana",
          "indices": [
              55,
              67
          ]
      },
      {
          "text": "energia",
          "indices": [
              94,
              102
          ]
      },
      {
          "text": "losveoenlatele",
          "indices": [
              114,
              129
          ]
      },
      {
          "text": "escortlovers",
          "indices": [
              21,
              34
          ]
      },
      {
          "text": "Viernes",
          "indices": [
              44,
              52
          ]
      },
      {
          "text": "FridayByTheFace",
          "indices": [
              56,
              72
          ]
      },
      {
          "text": "UniversiParty",
          "indices": [
              113,
              127
          ]
      },
      {
          "text": "medellín",
          "indices": [
              98,
              107
          ]
      },
      {
          "text": "viernes",
          "indices": [
              108,
              116
          ]
      }
  ]
}
