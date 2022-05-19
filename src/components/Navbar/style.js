import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icon/logo.svg';
import { ReactComponent as Category } from '../../assets/icon/category.svg';
import { ReactComponent as Arrow } from '../../assets/icon/arrow-up.svg';
export const Wrap = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

Wrap.Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 16px;
  background-color: #ffffff;
  height: 64px;
  width: 100%;
`;

Wrap.Logo = styled(Logo)`
  path {
    fill: #f0b90b;
  }
`;
Wrap.Link = styled.div``;
Wrap.Category = styled(Category)``;

Wrap.Arrow = styled(Arrow)`
  fill: #707a8a;
  transform: rotate(180deg);
  transition: all 0.2s linear;
`;
Wrap.Wrap = styled.div`
  display: flex;
  margin-left: 8px;
  margin-right: 8px;
  height: 100%;
  align-items: center;
  cursor: pointer;
  color: #1e2329;
  font-size: 14px;
  transition: all 0.1s linear;
  span {
    display: flex;
    position: relative;
    border-radius: 4px;
    margin-left: 8px;
    padding-left: 4px;
    padding-right: 4px;
    font-size: 12px;
    line-height: 16px;
    background-color: #fcd535;
    color: #1e2329;
    ::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      left: -3px;
      top: 2px;
      border-left: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid;
      border-right-color: #fcd535;
    }
  }
  :hover {
    color: #f0b90b;
  }
  &:hover ${Wrap.Arrow} {
    transform: rotate(0deg);
  }
`;

Wrap.Btn = styled.div`
  margin: 0px;
  appearance: none;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 14px;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  outline: none;
  padding: 6px 12px;
  line-height: 20px;
  min-width: 52px;
  word-break: keep-all;
  color: rgb(24, 26, 32);
  border-radius: 4px;
  min-height: 24px;
  border: none;
  background-image: none;
  background-color: rgb(252, 213, 53);
  font-weight: 400;
`;

Wrap.Section = styled.section`
  background-color: #fafafa;
`;
