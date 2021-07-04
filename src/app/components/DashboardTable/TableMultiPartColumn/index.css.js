import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 128px;

  position: relative;
  border-right: 2px solid ${({ theme }) => theme.colors.lightLighter};

  /* 129px is: 2 x 23px margin from DashboardTable Container +
     85px width of TableTimeColumn - 2px border */
  @media ${({ theme }) => theme.device.tablet} {
    width: ${({ width }) => `${width / 5}px`};
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    width: ${({ width }) => `${width / 2}px`};
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: ${({ width }) => `${width}px`};
  }
`;
// export const Container = styled.div`
//   height: 100%;
//   width: 128px;

//   position: relative;
//   border-right: 2px solid ${({ theme }) => theme.colors.lightLighter};

//   /* 129px is: 2 x 23px margin from DashboardTable Container +
//      85px width of TableTimeColumn - 2px border */
//   @media ${({ theme }) => theme.device.tablet} {
//     width: calc((100vw - 129px) / 5);
//   }
//   @media ${({ theme }) => theme.device.mobileLandscape} {
//     width: calc((100vw - 129px) / 2);
//   }
//   @media ${({ theme }) => theme.device.mobile} {
//     width: calc((100vw - 129px) / 1);
//   }
// `;
