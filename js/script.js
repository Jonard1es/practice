* {
    margin: 0;
    padding: 0;
    font-family:'Montserrat', sans-serif;
}

a {
    text-decoration: none;
}

.container {
    margin: 0 auto;
    width: 1440px;
}

.header {
    position: fixed;
    width: 100%;
    background-color: rgba(0, 0, 0, 95%);
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 10;
}

.navigation {
    display: flex;
    justify-content: space-between;
}

.nav-list {
    display: flex;
    align-items: center;
    list-style: none;
}

.nav-list-item {
    margin-right: 20px;
    margin-left: 20px;
    font-size: 20px;
}

.nav-list-item:hover:after {
    content: "";
    display: block;
    height: 1px;
    background-color: #fff;
}

.nav-list-item a {
    color: #fff;
}

.nav-list-item:last-child {
    margin-right: 0;
}