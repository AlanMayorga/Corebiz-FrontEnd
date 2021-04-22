import styled from 'styled-components';
import banner from '../../assets/img/banner.png';

const Slider = styled.div`
    margin: 0px;

    & > img {
        width: 100%;
    }
`;

export default function BannerSlider() {
    return (
        <div>
            <Slider>
                <img src={banner} alt="Primer imagen" />
            </Slider>
        </div>
    );
}