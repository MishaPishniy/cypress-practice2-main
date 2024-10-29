describe('Auth', () => {
    let sid;
    before(() => {

        const userCreds = {
            email: 'mishap1234@gmail.com',
            password: 'qwertyQ1!',
            remember: true
        }
        cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', userCreds).then((response) => {
            const headers = response.headers;
            const cookie = headers['set-cookie'][1];
            const cookieArray = cookie.split('\n');
            for (const cookie of cookieArray) {
                if (cookie.trim().startsWith('sid=')) {
                    sid = (cookie.trim().split('=')[1]).split(';')[0];
                    break;
                }
            }
        })
    })

    it.only('Get cars', () => {
        cy.request({
            method: 'GET',
            url: 'https://qauto.forstudy.space/api/cars',
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200);
        });
    })
})