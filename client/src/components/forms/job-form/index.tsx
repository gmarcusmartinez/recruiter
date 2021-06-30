import React from 'react';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { texts, files, blankForm, selects } from './inputs';
import { Text, FileInput } from 'components/common/DashInputs';
import { Spinner } from 'components/common/Spinner';
import { TextArea } from 'components/common/DashInputs/TextArea';
import { Select } from 'components/common/DashInputs';

export const JobForm = () => {
  const { createProfile } = useActions();
  const { theme } = useTypedSelector(({ dashboard }) => dashboard);
  const { loading } = useTypedSelector(({ profiles }) => profiles);
  const [formData, setFormData] = React.useState(blankForm);
  const [imageData, setImageData] = React.useState<File | null>(null);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImageData(e.target.files![0]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  if (loading) return <Spinner />;
  return (
    <form className='job-form' onSubmit={handleSubmit}>
      <Text onChange={onChange} item={texts[0]} value={formData.title} />
      <Text onChange={onChange} item={texts[1]} value={formData.company} />
      <Text onChange={onChange} item={texts[2]} value={formData.location} />
      <Text onChange={onChange} item={texts[3]} value={formData.link} />
      <TextArea
        onChange={onChange}
        item={texts[4]}
        value={formData.description}
      />
      <FileInput item={files[0]} onChange={onImgChange} file={imageData} />
      <Select item={selects[0]} onChange={onChange} />
      <Select item={selects[1]} onChange={onChange} />
      <Select item={selects[2]} onChange={onChange} />
      <button style={{ backgroundColor: theme }}>Submit</button>
    </form>
  );
};
