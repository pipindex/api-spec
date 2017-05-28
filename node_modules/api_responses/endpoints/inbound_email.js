var standardResponse = require('api_responses/standardResponse.js'),
    transformInboundEmail = require('api_responses/converters/transformInboundEmail.js'),
    seedData = require('seed_data');

module.exports = {
    createInboundMixedEmails: {
        requests: [{
            method: "POST",
            url: "/v1/inbound_email",
            data: {
                "mandrill_events": JSON.stringify([
                    {
                        "event": "inbound",
                        "ts": 1434727498,
                        "msg": {
                            "text": "Like no one ever was.\nTo catch them is my real test, to train them is my goal.\nI will travel across the land searching far and wide, each Pokemon to understand the power that's inside!",
                            "html": "<p>Like no one ever was.</p><p>To catch them is my real test, to train them is my goal.</p><p>I will travel across the land searching far and wide, each Pokemon to understand the power that's inside!</p>",
                            "from_email": "piptest2@mailinator.com",
                            "from_name": "Test 2",
                            "to": [
                                [
                                    "ash.ketchum@academyft.com",
                                    "Ash Ketchum"
                                ]
                            ],
                            "subject": "I wanna be the very best...",
                            "email": "HI3hG5BoA8@inbound-mail.academyft.com"
                        }
                    },{
                        "event": "inbound",
                        "ts": 1434981665,
                        "msg": {
                            "text": "Guilty feet have got no rhythm, though it's easy to pretend I know you're not a fool.\nShould of known better than to cheat a friend, the wasted chance that I've been given.\nSo I'm never going to dance again, the way I danced with youuuuuuuuuuuu! Ohhhhhhhhh!",
                            "from_email": "piptest2@mailinator.com",
                            "from_name": "Test 2",
                            "to": [
                                [
                                    "george.michael@academyft.com",
                                    "George Michael"
                                ]
                            ],
                            "subject": "I'm never gonna dance again...",
                            "email": "HI3hG5BoA8@inbound-mail.academyft.com"
                        }
                    },{ // The following email should be ignored as we don't know the sender
                        "event": "inbound",
                        "ts": 1434981665,
                        "msg": {
                            "text": "Do you sell balloons?",
                            "from_email": "dude.likes.to.party@gmail.com",
                            "from_name": "Party Dude",
                            "to": [
                                [
                                    "george.michael@academyft.com",
                                    "George Michael"
                                ]
                            ],
                            "subject": "Need balloons for my party!",
                            "email": "HI3hG5BoA8@inbound-mail.academyft.com"
                        }
                    }
                ])
            }
        }],
        response: standardResponse([
            {
                "id": "__inboundEmailId1__",
                "lead": {
                    "id": String(seedData.mongoId("test2ThePerson")),
                    "href": "/v1/lead/" + seedData.mongoId("test2ThePerson")
                },
                "date": "2015-06-19T15:24:58+00:00",
                "from_address": "piptest2@mailinator.com",
                "from_name": "Test 2",
                "to": [
                    {
                        "address": "ash.ketchum@academyft.com",
                        "name": "Ash Ketchum"
                    }
                ],
                "subject": "I wanna be the very best...",
                "text_content": "Like no one ever was.\nTo catch them is my real test, to train them is my goal.\nI will travel across the land searching far and wide, each Pokemon to understand the power that's inside!",
                "html_content": "<p>Like no one ever was.</p><p>To catch them is my real test, to train them is my goal.</p><p>I will travel across the land searching far and wide, each Pokemon to understand the power that's inside!</p>",
                "href": "/v1/inbound_email/__inboundEmailId1__",
                "_type": "inbound_email"
            },
            {
                "id": "__inboundEmailId2__",
                "lead": {
                    "id": String(seedData.mongoId("test2ThePerson")),
                    "href": "/v1/lead/" + seedData.mongoId("test2ThePerson")
                },
                "date": "2015-06-22T14:01:05+00:00",
                "from_address": "piptest2@mailinator.com",
                "from_name": "Test 2",
                "to": [
                    {
                        "address": "george.michael@academyft.com",
                        "name": "George Michael"
                    }
                ],
                "subject": "I'm never gonna dance again...",
                "text_content": "Guilty feet have got no rhythm, though it's easy to pretend I know you're not a fool.\nShould of known better than to cheat a friend, the wasted chance that I've been given.\nSo I'm never going to dance again, the way I danced with youuuuuuuuuuuu! Ohhhhhhhhh!",
                "html_content": null,
                "href": "/v1/inbound_email/__inboundEmailId2__",
                "_type": "inbound_email"
            }
        ])
    },
    createInboundHtmlOnlyEmail: {
        requests: [{
            method: "POST",
            url: "/v1/inbound_email",
            data: {
                "mandrill_events": JSON.stringify([
                    {
                        "event": "inbound",
                        "ts": 1434981665,
                        "msg": {
                            "from_email": "piptest2@mailinator.com",
                            "from_name": "Test 2",
                            "html": '<h1>Title</h1> <p>Paragraph body with <a href="http://google.com/?query=true">link text</a> embedded</p> <blockquote><p>Nested paragraphs</p><p>With a blockquote</p> Not in a paragraph<br /> but on a newline <blockquote>and now a nested blockquote oh my!</blockquote></blockquote> <table><tr><th>Heading 1</th><th>Heading 2</th></tr><tr><td>Row 1 cell 1</td><td>Row 1 cell 2</td></tr><tr><td>Row 2 cell 1</td><td><b>Row 2 cell 2 bold</b></td></td></table>',
                            "to": [
                                [
                                    "peter.piper@academyft.com",
                                    "Peter Piper"
                                ]
                            ],
                            "subject": "HTML converted to plaintext",
                            "email": "HI3hG5BoA8@inbound-mail.academyft.com"
                        }
                    }
                ])
            }
        }],
        response: standardResponse([
            {
                "id": "__inboundEmailId1__",
                "lead": {
                    "id": String(seedData.mongoId("test2ThePerson")),
                    "href": "/v1/lead/" + seedData.mongoId("test2ThePerson")
                },
                "date": "2015-06-22T14:01:05+00:00",
                "from_address": "piptest2@mailinator.com",
                "from_name": "Test 2",
                "to": [
                    {
                        "address": "peter.piper@academyft.com",
                        "name": "Peter Piper"
                    }
                ],
                "subject": "HTML converted to plaintext",
                "text_content": "Title\n=====\n\nParagraph body with [link text](http:\/\/google.com\/?query=true) embedded\n\n> Nested paragraphs\n> \n> With a blockquote\n> \n>  Not in a paragraph  \n>  but on a newline > and now a nested blockquote oh my!\n\n Heading 1Heading 2Row 1 cell 1Row 1 cell 2Row 2 cell 1**Row 2 cell 2 bold**",
                "html_content": '<h1>Title</h1> <p>Paragraph body with <a href="http://google.com/?query=true">link text</a> embedded</p> <blockquote><p>Nested paragraphs</p><p>With a blockquote</p> Not in a paragraph<br /> but on a newline <blockquote>and now a nested blockquote oh my!</blockquote></blockquote> <table><tr><th>Heading 1</th><th>Heading 2</th></tr><tr><td>Row 1 cell 1</td><td>Row 1 cell 2</td></tr><tr><td>Row 2 cell 1</td><td><b>Row 2 cell 2 bold</b></td></td></table>',
                "href": "/v1/inbound_email/__inboundEmailId1__",
                "_type": "inbound_email"
            }
        ])
    },
    createInboundHtmlOnlyEmailStripInvalidTags: {
        requests: [{
            method: "POST",
            url: "/v1/inbound_email",
            data: {
                "mandrill_events": JSON.stringify([
                    {
                        "event": "inbound",
                        "ts": 1434933991,
                        "msg": {
                            "from_email": "piptest2@mailinator.com",
                            "from_name": "Test 2",
                            "html": 'Before script<script>alert("hello");</script>After script. Before style<style>body, html { width: 100%; }</style>After style',
                            "to": [
                                [
                                    "mr.t@academyft.com",
                                    "Mr T"
                                ]
                            ],
                            "subject": "Stripped tags",
                            "email": "HI3hG5BoA8@inbound-mail.academyft.com"
                        }
                    }
                ])
            }
        }],
        response: standardResponse([
            {
                "id": "__inboundEmailId1__",
                "lead": {
                    "id": String(seedData.mongoId("test2ThePerson")),
                    "href": "/v1/lead/" + seedData.mongoId("test2ThePerson")
                },
                "date": "2015-06-22T00:46:31+00:00",
                "from_address": "piptest2@mailinator.com",
                "from_name": "Test 2",
                "to": [
                    {
                        "address": "mr.t@academyft.com",
                        "name": "Mr T"
                    }
                ],
                "subject": "Stripped tags",
                "text_content": "Before scriptAfter script. Before styleAfter style",
                "html_content": 'Before script<script>alert("hello");</script>After script. Before style<style>body, html { width: 100%; }</style>After style',
                "href": "/v1/inbound_email/__inboundEmailId1__",
                "_type": "inbound_email"
            }
        ])
    },
    getInboundEmailsForTest2ThePerson: {
        requests: [
           "GET /v1/lead/" + seedData.mongoId("test2ThePerson") + "/inbound_email"
        ],
        response: standardResponse([ // Ordered by date
            transformInboundEmail("inboundEmail1"),
            transformInboundEmail("inboundEmail2")
        ])
    },
    getInboundEmailsForTest1ThePerson: {
        requests: [
            "GET /v1/lead/" + seedData.mongoId("test1ThePerson") + "/inbound_email"
        ],
        response: standardResponse([ // Ordered by date
            transformInboundEmail("inboundEmail3")
        ])
    }
};