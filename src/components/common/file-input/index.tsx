import styles from './index.module.css';
import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

const FileInput = (props: any) => {
  const intl = useIntl();

  const { name, label = name, mode = 'update' } = props;
  const { register, unregister, setValue, watch } = useForm();

  const files = watch(name);

  const onDrop = useCallback(
    // @ts-ignore
    (droppedFiles) => {
      let newFiles =
        mode === 'update' ? droppedFiles : [...(files || []), ...droppedFiles];
      if (mode === 'append') {
        // @ts-ignore
        newFiles = newFiles.reduce((prev, file) => {
          const fo = Object.entries(file);
          if (
            prev.find((e: any) => {
              const eo = Object.entries(e);
              return eo.every(
                ([key, value], index) =>
                  key === fo[index][0] && value === fo[index][1]
              );
            })
          ) {
            return prev;
          } else {
            return [...prev, file];
          }
        }, []);
      }
      setValue(name, newFiles, { shouldValidate: true });
    },
    [setValue, name, mode, files]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: props.accept,
  });

  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  return (
    <div className={styles.main}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      <div {...getRootProps()}>
        <input
          {...props}
          className={styles.input}
          id={name}
          {...getInputProps()}
        />

        <div className={styles.container}>
          <p className={styles.text}>
            {intl.formatMessage({
              id: 'file-input.drop-files',
              defaultMessage: 'Drop the files here...',
            })}
          </p>
          {!!files?.length && (
            <div className={styles.container_files}>
              {files.map((file: any) => {
                return (
                  <div key={file.name}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      width={100}
                      height={100}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileInput;
