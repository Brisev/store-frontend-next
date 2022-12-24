import { CardMedia, Box } from '@mui/material';
import { memo } from 'react';
import Link from 'next/link';
import style from './productCard.module.css';

export interface PRODUCT_MEDIA {
  media: string;
  name: string;
  id: string;
}

const ProductMedia = ({ media, name, id }: PRODUCT_MEDIA) => {
  return (
    <Link
      href={`/store/${id}`}
      // className={style.productMedia}
    >
      <Box
        sx={{
          overflow: 'hidden',
          '&:hover > img': {
            transform: 'scale(1.1)',
            transition: '0.5s ease-out',
          },
        }}
      >
        <CardMedia
          component='img'
          height={140}
          width={50}
          image={media}
          alt={name}
          sx={{
            padding: 0.5,
            transition: '0.5s ease-out',
          }}
        />
      </Box>
    </Link>
  );
};

export default memo(ProductMedia);
