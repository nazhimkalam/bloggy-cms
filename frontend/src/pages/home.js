import React from 'react'
import styled from 'styled-components'
import Blogs from '../components/Blogs/Blogs'
import CreateBlog from '../components/CreateBlog/CreateBlog'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Home = () => {
    return (
        <Container>
            <Header />
            <CreateBlog />
            <Blogs />
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.div``;