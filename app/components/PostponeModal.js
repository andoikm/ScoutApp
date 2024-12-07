import { View, StyleSheet } from 'react-native';
import Button from './Button';
import CustomModal from './CustomModal';
import { useState } from 'react';
import RadioInput from './RadioInput';
import Segmented from './Segmented';
import TextArea from './TextArea';

const otherId = 6;

const options = [
  { id: 1, label: 'Additional rest of the athlete', label2: 'Մարզիկի լրացուցիչ հանգիստ' },
  { id: 2, label: 'Cleaning of the studio', label2: 'Ստուդիայի մաքրություն'},
  { id: 3, label: 'Technical issue', label2: 'Տեխնիկական խնդիր'},
  { id: 4, label: 'Health issue', label2: 'Առողջական խնդիր'},
  { id: 5, label: 'Referee change', label2: 'Տեխնիկական խնդիր'},
  { id: 6, label: 'Other', label2: 'Այլ պատճառ'},
];

const PostponeModal = () => {
  const [open, setOpen] = useState(false);
  const [reasonCode, setReasonCode] = useState(1);

  return  (
   <>
      <Button
        flex={1}
        title="POSTPONE"
        size="small"
        theme="dangerOutline"
        disabled={open}
        onPress={() => setOpen(true)}
      />
       <CustomModal
         title='Postpone Reason'
         open={open}
         onOpenChange={setOpen}
         onRightSuccess={() => setOpen(false)}
         onRightCancel={() => setOpen(false)}
         rightSuccessButtonProps={{ title: 'CONFIRM' }}
       >
         <View style={baseStyles.view}>
           <RadioInput options={options} value={reasonCode} onChange={setReasonCode} />
           {reasonCode === otherId &&
             <TextArea value='' onChange={() => {}} placeholder="Write Your Reason Here" />
           }
           <Segmented
             value={5}
             onSegmentChange={() => {
             }}
             segments={[
               {value: 5, label: '5m'},
               {value: 10, label: '10m'},
               {value: 15, label: '15m'},
               {value: 20, label: '20m'},
             ]}
           />
         </View>
       </CustomModal>
    </>
  );
};

export default PostponeModal;

const baseStyles = StyleSheet.create({
  view: {
    display: 'flex',
    gap: 18,
  }
})