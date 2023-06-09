import styled from 'styled-components';

import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 115vh;
    max-height: 70vw;
    position: relative;
    z-index: 1;
    overflow: hidden;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background: linear-gradient(
        //     180deg, 
        //     rgba(0, 0, 0, 0.2) 0%, 
        //     rgba(0, 0, 0, 0.6) 100%
        // ), linear-gradient(
        //     180deg, 
        //     rgba(0,0,0,0.2) 0%,
        //     transparent 100%
        // );
        z-index: 2;
    }
`;

/* Add :before styles */

export const HeroBg = styled.div`
    position: absolute;
    top: 80px;
    // right: 0;
    bottom: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
    overflow: hidden;
    
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    // background: #232a34;
`;

export const HeroImg = styled.img`
    /* Set a specific height */
    height: 100%;
    // width: 100%;
    object-fit: cover;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HeroH1 = styled.p`
    color: white;
    // color:#FFD700;
    font-size: 58px;
    text-align: center;
    font-family: cursive;
    animation: cssAnimation 0s 2.0s forwards;
    visibility: hidden;


    @media screen and (max-width: 850px) {
        font-size: 58px;
        font-family: 'cursive';
    }

    // @media screen and (max-width: 480px) {
    //     font-size: 18px;
    //     font-family: 'cursive';
    // }

    @keyframes cssAnimation {
        to   { visibility: visible; }

`;

export const HeroP = styled.p`
animation-delay: 5s; 
    margin-top: 5px;
    color: white;
    font-size: 34px;
    text-align: center;
    max-width: 600px;
    font-family: cursive;
    
    @media screen and (max-width: 850px) {
        font-size: 34px;
        font-family: 'cursive';
    }

    // @media screen and (max-width: 480px) {
    //     font-size: 12px;
    //     font-family: 'cursive';
    // }

`;

// export const HeroBtnWrapper = styled.div`
//     margin-top: 32px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

// export const ArrowForward = styled(MdArrowForward)`
//     margin-left: 8px;
//     font-size: 20px;
// `;

// export const ArrowRight = styled(MdKeyboardArrowRight)`
//     margin-left: 8px;
//     font-size: 20px;
// `;
