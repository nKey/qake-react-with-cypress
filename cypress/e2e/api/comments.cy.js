describe("UC02 - JSONPLACEHOLDER COMMENTS", function () {
    it("UC02.01 - GET COMMENTS", function () {
        cy.request({
            method: "GET",
            // url: Cypress.env("api") + "comments",
            url: "https://jsonplaceholder.typicode.com/comments",
        }).then((response) => {
            const wantedGetComments = [
                {
                    postId: 1,
                    id: 1,
                    name: "id labore ex et quam laborum",
                    email: "Eliseo@gardner.biz",
                    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
                },
                {
                    postId: 1,
                    id: 2,
                    name: "quo vero reiciendis velit similique earum",
                    email: "Jayne_Kuhic@sydney.com",
                    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
                },
                {
                    postId: 1,
                    id: 3,
                    name: "odio adipisci rerum aut animi",
                    email: "Nikita@garfield.biz",
                    body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
                },
                {
                    postId: 1,
                    id: 4,
                    name: "alias odio sit",
                    email: "Lew@alysha.tv",
                    body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
                },
                {
                    postId: 1,
                    id: 5,
                    name: "vero eaque aliquid doloribus et culpa",
                    email: "Hayden@althea.biz",
                    body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
                },
                {
                    postId: 2,
                    id: 6,
                    name: "et fugit eligendi deleniti quidem qui sint nihil autem",
                    email: "Presley.Mueller@myrl.com",
                    body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
                },
                {
                    postId: 2,
                    id: 7,
                    name: "repellat consequatur praesentium vel minus molestias voluptatum",
                    email: "Dallas@ole.me",
                    body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
                },
                {
                    postId: 2,
                    id: 8,
                    name: "et omnis dolorem",
                    email: "Mallory_Kunze@marie.org",
                    body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
                },
                {
                    postId: 2,
                    id: 9,
                    name: "provident id voluptas",
                    email: "Meghan_Littel@rene.us",
                    body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
                },
                {
                    postId: 2,
                    id: 10,
                    name: "eaque et deleniti atque tenetur ut quo ut",
                    email: "Carmen_Keeling@caroline.name",
                    body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
                },
                {
                    postId: 3,
                    id: 11,
                    name: "fugit labore quia mollitia quas deserunt nostrum sunt",
                    email: "Veronica_Goodwin@timmothy.net",
                    body: "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea",
                },
                {
                    postId: 3,
                    id: 12,
                    name: "modi ut eos dolores illum nam dolor",
                    email: "Oswald.Vandervort@leanne.org",
                    body: "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit",
                },
                {
                    postId: 3,
                    id: 13,
                    name: "aut inventore non pariatur sit vitae voluptatem sapiente",
                    email: "Kariane@jadyn.tv",
                    body: "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et",
                },
                {
                    postId: 3,
                    id: 14,
                    name: "et officiis id praesentium hic aut ipsa dolorem repudiandae",
                    email: "Nathan@solon.io",
                    body: "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum",
                },
                {
                    postId: 3,
                    id: 15,
                    name: "debitis magnam hic odit aut ullam nostrum tenetur",
                    email: "Maynard.Hodkiewicz@roberta.com",
                    body: "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia",
                },
                {
                    postId: 4,
                    id: 16,
                    name: "perferendis temporibus delectus optio ea eum ratione dolorum",
                    email: "Christine@ayana.info",
                    body: "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis",
                },
                {
                    postId: 4,
                    id: 17,
                    name: "eos est animi quis",
                    email: "Preston_Hudson@blaise.tv",
                    body: "consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore",
                },
                {
                    postId: 4,
                    id: 18,
                    name: "aut et tenetur ducimus illum aut nulla ab",
                    email: "Vincenza_Klocko@albertha.name",
                    body: "veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias",
                },
                {
                    postId: 4,
                    id: 19,
                    name: "sed impedit rerum quia et et inventore unde officiis",
                    email: "Madelynn.Gorczany@darion.biz",
                    body: "doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut",
                },
                {
                    postId: 4,
                    id: 20,
                    name: "molestias expedita iste aliquid voluptates",
                    email: "Mariana_Orn@preston.org",
                    body: "qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore",
                },
                {
                    postId: 5,
                    id: 21,
                    name: "aliquid rerum mollitia qui a consectetur eum sed",
                    email: "Noemie@marques.me",
                    body: "deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque est\nnam autem error delectus",
                },
                {
                    postId: 5,
                    id: 22,
                    name: "porro repellendus aut tempore quis hic",
                    email: "Khalil@emile.co.uk",
                    body: "qui ipsa animi nostrum praesentium voluptatibus odit\nqui non impedit cum qui nostrum aliquid fuga explicabo\nvoluptatem fugit earum voluptas exercitationem temporibus dignissimos distinctio\nesse inventore reprehenderit quidem ut incidunt nihil necessitatibus rerum",
                },
                {
                    postId: 5,
                    id: 23,
                    name: "quis tempora quidem nihil iste",
                    email: "Sophia@arianna.co.uk",
                    body: "voluptates provident repellendus iusto perspiciatis ex fugiat ut\nut dolor nam aliquid et expedita voluptate\nsunt vitae illo rerum in quos\nvel eligendi enim quae fugiat est",
                },
                {
                    postId: 5,
                    id: 24,
                    name: "in tempore eos beatae est",
                    email: "Jeffery@juwan.us",
                    body: "repudiandae repellat quia\nsequi est dolore explicabo nihil et\net sit et\net praesentium iste atque asperiores tenetur",
                },
                {
                    postId: 5,
                    id: 25,
                    name: "autem ab ea sit alias hic provident sit",
                    email: "Isaias_Kuhic@jarrett.net",
                    body: "sunt aut quae laboriosam sit ut impedit\nadipisci harum laborum totam deleniti voluptas odit rem ea\nnon iure distinctio ut velit doloribus\net non ex",
                },
                {
                    postId: 6,
                    id: 26,
                    name: "in deleniti sunt provident soluta ratione veniam quam praesentium",
                    email: "Russel.Parker@kameron.io",
                    body: "incidunt sapiente eaque dolor eos\nad est molestias\nquas sit et nihil exercitationem at cumque ullam\nnihil magnam et",
                },
                {
                    postId: 6,
                    id: 27,
                    name: "doloribus quibusdam molestiae amet illum",
                    email: "Francesco.Gleason@nella.us",
                    body: "nisi vel quas ut laborum ratione\nrerum magni eum\nunde et voluptatem saepe\nvoluptas corporis modi amet ipsam eos saepe porro",
                },
                {
                    postId: 6,
                    id: 28,
                    name: "quo voluptates voluptas nisi veritatis dignissimos dolores ut officiis",
                    email: "Ronny@rosina.org",
                    body: "voluptatem repellendus quo alias at laudantium\nmollitia quidem esse\ntemporibus consequuntur vitae rerum illum\nid corporis sit id",
                },
                {
                    postId: 6,
                    id: 29,
                    name: "eum distinctio amet dolor",
                    email: "Jennings_Pouros@erica.biz",
                    body: "tempora voluptatem est\nmagnam distinctio autem est dolorem\net ipsa molestiae odit rerum itaque corporis nihil nam\neaque rerum error",
                },
                {
                    postId: 6,
                    id: 30,
                    name: "quasi nulla ducimus facilis non voluptas aut",
                    email: "Lurline@marvin.biz",
                    body: "consequuntur quia voluptate assumenda et\nautem voluptatem reiciendis ipsum animi est provident\nearum aperiam sapiente ad vitae iste\naccusantium aperiam eius qui dolore voluptatem et",
                },
            ];
            expect(response.status).to.equal(200);
            const getComments = response.body;
            expect(getComments).to.not.equal(undefined);
            expect(getComments).to.not.equal(null);
            cy.writeFile("cypress/json/wantedGetComments.json", getComments);
            expect(getComments.length).to.equal(500);
            expect(getComments[0].name).to.equal(wantedGetComments[0].name);
            expect(getComments[0].body).to.equal(wantedGetComments[0].body);
            expect(getComments[0].email).to.equal(wantedGetComments[0].email);
            expect(getComments[15].name).to.equal(wantedGetComments[15].name);
            expect(getComments[15].body).to.equal(wantedGetComments[15].body);
            expect(getComments[15].email).to.equal(wantedGetComments[15].email);
            expect(getComments[29].name).to.equal(wantedGetComments[29].name);
            expect(getComments[29].body).to.equal(wantedGetComments[29].body);
            expect(getComments[29].email).to.equal(wantedGetComments[29].email);
        });
    });
    it("UC02.02 - POST COMMENTS", function () {
        const body = {
            name: "O som do amor.",
            email: "johndoe@mail.com",
            body: "Na ilha formosa, cheia de graça. O time da raça. É povo é gente, é bola pra frente, É só coraçãoo, meu Avaí!",
        };

        cy.request({
            method: "POST",
            // url: Cypress.env("api") + "comments",
            url: "https://jsonplaceholder.typicode.com/comments",
            body: body,
        }).then((response) => {
            const wantedPostComments = {
                name: "O som do amor.",
                email: "johndoe@mail.com",
                body: "Na ilha formosa, cheia de graça. O time da raça. É povo é gente, é bola pra frente, É só coraçãoo, meu Avaí!",
            };
            expect(response.status).to.equal(201);
            const postComment = response.body;
            expect(postComment).to.not.equal(undefined);
            expect(postComment).to.not.equal(null);
            cy.writeFile("cypress/json/wantedPostComments.json", postComment);
            expect(postComment.name).to.equal(wantedPostComments.name);
            expect(postComment.email).to.equal(wantedPostComments.email);
            expect(postComment.body).to.equal(wantedPostComments.body);
        });
    });
    it("UC02.03 - PUT COMMENTS", function () {
        const body = {
            name: "O som do amor.",
            email: "johndoe@mail.com",
            body: "Na ilha formosa, cheia de graça. O time da raça. É povo é gente, é bola pra frente, É só coraçãoo, meu Avaí!",
        };
        cy.request({
            method: "PUT",
            // url: Cypress.env("api") + "comments/1",
            url: "https://jsonplaceholder.typicode.com/comments/1",
            body: body,
        }).then((response) => {
            const wantedPutComment = {
                name: "O som do amor.",
                email: "johndoe@mail.com",
                body: "Na ilha formosa, cheia de graça. O time da raça. É povo é gente, é bola pra frente, É só coraçãoo, meu Avaí!",
            };
            expect(response.status).to.equal(200);
            const putComment = response.body;
            expect(putComment).to.not.equal(undefined);
            expect(putComment).to.not.equal(null);
            cy.writeFile("cypress/json/wantedPutComment.json", putComment);
            expect(putComment.name).to.equal(wantedPutComment.name);
            expect(putComment.email).to.equal(wantedPutComment.email);
            expect(putComment.body).to.equal(wantedPutComment.body);
            cy.wait(3000);
        });
    });
});
