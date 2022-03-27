const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <img src="/images/homePage.jpg" alt="Cat Eatting Ramen"/>
            </main>
        </Def>
    )
}

module.exports = home