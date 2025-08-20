import IconButton from '@/components/atoms/IconBtn/IconButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LeftArrowIcon = () => (
  <MaterialCommunityIcons name="arrow-left" size={24} />
);

const ApplicationNavigator = () => {
  return <IconButton Icon={LeftArrowIcon} isRounded={true} />;
};

export default ApplicationNavigator;
