import { Skeleton } from '@mui/material';
import Container from '@/components/shared/Container';

export default function Loading() {
  return (
    <>
      <section style={{ paddingBottom: '50px' }}>
        <Container classNames="d-flex gap-50 jc-sb">
          <div style={{ width: 'calc(50% - 30px)' }}>
            <Skeleton sx={{ transform: 'none', height: '100%', width: '100%' }} />
          </div>
          <div style={{ width: 'calc(50% - 30px)' }}>
            <Skeleton
              sx={{ transform: 'none', height: '84px', width: '100%', marginBottom: '20px' }}
            />
            <Skeleton
              sx={{ transform: 'none', height: '32px', width: '100%', marginBottom: '30px' }}
            />
            <Skeleton
              sx={{ transform: 'none', height: '54px', width: '100%', marginBottom: '30px' }}
            />
            <Skeleton
              sx={{ transform: 'none', height: '41px', width: '100%', marginBottom: '30px' }}
            />
            <Skeleton
              sx={{ transform: 'none', height: '78px', width: '100%', marginBottom: '30px' }}
            />
            <Skeleton
              sx={{ transform: 'none', height: '84px', width: '100%', marginBottom: '65px' }}
            />
            <Skeleton
              sx={{ transform: 'none', height: '45px', width: '100%', marginBottom: '42px' }}
            />
            <Skeleton
              sx={{ transform: 'none', height: '56px', width: '100%', marginBottom: '30px' }}
            />
            <Skeleton sx={{ transform: 'none', height: '102px', width: '100%' }} />
          </div>
        </Container>
      </section>
    </>
  );
}
