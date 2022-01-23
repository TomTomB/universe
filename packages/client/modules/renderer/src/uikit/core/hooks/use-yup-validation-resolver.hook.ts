/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback } from 'react';
import type { OptionalObjectSchema } from 'yup/lib/object';

// TODO(TRB): Assign correct types
export const useYupValidationResolver = <T extends OptionalObjectSchema<any>>(
  validationSchema: T,
) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: (errors as any).inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {},
          ),
        };
      }
    },
    [validationSchema],
  );
