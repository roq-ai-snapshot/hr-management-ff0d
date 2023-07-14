import { signIn, signUp, requireNextAuth } from '@roq/nextjs';
import HomeLayout from 'layout/home-layout';
import { Box, Heading, Text, Stack, Image, Link } from '@chakra-ui/react';
import { FC } from 'react';
import { CustomButton } from 'components/custom-button';
import Head from 'next/head';

const Card: FC<{
  userTypeName: string;
  onSignup?: () => void;
  onLogin?: () => void;
  rootClass?: string;
  type?: string;
}> = ({ userTypeName, rootClass = '', type = '' }) => (
  <Box
    width={{ md: '310px' }}
    bgColor="base.200"
    p="18px"
    border="1px solid"
    borderColor="base.300"
    borderRadius="8px"
    className={rootClass}
  >
    <Text fontSize="xl" color="base.content" fontWeight={600} mb="24px">
      {userTypeName}
    </Text>
    <Box display="flex">
      <CustomButton flex={1} weight="primary" onClick={() => signUp(type)}>
        Signup
      </CustomButton>
      <CustomButton onClick={() => signIn(type)} flex={{ base: 1, lg: '0 0 131px' }} weight="secondary" ml="12px">
        Login
      </CustomButton>
    </Box>
  </Box>
);

function HomePage() {
  return (
    <>
      <Head>
        <title>{`HR Management`}</title>

        <meta
          name="description"
          content="Welcome to HR Management - Streamlining HR processes for enhanced efficiency and employee experience. Centralized data, time tracking, performance evaluation, and engagement tools at your fingertips. Boosting productivity and organizational success through automation."
        />
      </Head>
      <HomeLayout>
        <Box position="relative" display="flex" flex={{ lg: '0 0 485px' }} height={{ base: '180px', lg: 'auto' }}>
          <Image
            flex="1"
            src={
              'https://images.unsplash.com/photo-1529651737248-dad5e287768e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjA3NjB8MHwxfHNlYXJjaHwxfHxIUiUyMG1hbmFnZW1lbnQlMkNwcm9kdWN0aXZpdHl8ZW58MHx8fHwxNjg5MzQ4NjczfDA&ixlib=rb-4.0.3&q=80&w=1080'
            }
            alt="Dinner"
            objectFit="cover"
            objectPosition="center"
          />
          <Box position="absolute" top="0" backgroundColor="rgba(0,0,0,0.6)" width="100%" py="2">
            <Text align="center" fontSize="sm" color="white">
              Photo by{' '}
              <Link
                href="https://unsplash.com/@bajkorenata?utm_source=roq-generator&utm_medium=referral"
                isExternal
                color="teal.200"
              >{`Renáta-Adrienn`}</Link>{' '}
              on{' '}
              <Link
                href="https://unsplash.com/?utm_source=roq-generator&utm_medium=referral"
                isExternal
                color="teal.200"
              >
                Unsplash
              </Link>
            </Text>
          </Box>
        </Box>
        <Box padding={{ base: '32px 16px', lg: '32px 64px', xl: '64px 128px' }} overflow="auto">
          <Box>
            <Heading mb={{ base: '12px', lg: '20px' }} size="2xl">
              {`HR Management`}
            </Heading>
            <Text size="2xl" mb={{ base: '32px', lg: '48px' }} color="base.content" opacity="0.6">
              {`Welcome to HR Management - Streamlining HR processes for enhanced efficiency and employee experience. Centralized data, time tracking, performance evaluation, and engagement tools at your fingertips. Boosting productivity and organizational success through automation.`}
            </Text>
            <Box
              className="roles-container"
              display={'flex'}
              flexDirection={'column'}
              w={{ base: '100%', md: 'fit-content' }}
            >
              <Stack direction="column" spacing={6}>
                <Card userTypeName="Customer" type="customer" />

                <Card userTypeName="HR Manager" type="hr-manager" />
              </Stack>
            </Box>
          </Box>
        </Box>
      </HomeLayout>
    </>
  );
}

export default requireNextAuth({
  redirectIfAuthenticated: true,
  redirectTo: '/users',
})(HomePage);
