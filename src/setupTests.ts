/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import ReactSixteenAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
