import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Home = () => {
    return (
        <Container>
            <Header />
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.div``;