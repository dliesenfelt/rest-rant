const React = require('react');
const Def = require('./default');

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <img src="/images/404.jpg" alt="funny husky"/>
                <p>Oops, sorry we cant find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404