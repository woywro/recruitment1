import { client } from '../../apollo-client';
import { gql } from '@apollo/client';
import { CompareView } from '../views/CompareView';

export default function Compare() {
  return <CompareView />;
}
