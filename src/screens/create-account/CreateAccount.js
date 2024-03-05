import { Image, Text, View, FlatList } from "react-native";
import PackagePlanCard from "../../components/PackagePlanCard";

import LogoImage from '../../assets/svg/Logo.svg';
import Tabs from "../../components/Tabs";
import { storeData } from "../../utils/asyncStorage";


export default function CreateAccount() {

  const monthlyPackagePlans = [
    {
      id: 1,
      'packageType': 'Starter',
      'packagePrice': '$79',
      'packageDescription': 'By creating an Account on our service, you agree to subscribe',
      'packageDuration': 'Month',
      'packagePlanInclusions': [
        {
          id: 1,
          inclusion: 'Electronic Health Records (EHR) management'
        },
        {
          id: 2,
          inclusion: 'Appointment scheduling and reminders'
        },
        {
          id: 3,
          inclusion: 'Patient communication portal'
        },
        {
          id: 4,
          inclusion: 'Secure data storage'
        },
        {
          id: 5,
          inclusion: 'Basic reporting and analytics'
        }
      ]
    },
    {
      id: 2,
      'packageType': 'Pro',
      'packagePrice': '$99',
      'packageDescription': 'With all starter package features, include:',
      'packageDuration': 'Month',
      'packagePlanInclusions': [
        {
          id: 1,
          inclusion: 'All Basic Package features'
        },
        {
          id: 2,
          inclusion: 'Telehealth capabilities'
        },
        {
          id: 3,
          inclusion: 'Billing and invoicing tools'
        },
        {
          id: 4,
          inclusion: 'Advanced reporting and analytics'
        },
        {
          id: 5,
          inclusion: 'Integration with pharmacy systems'
        }
      ]
    },
    {
      id: 3,
      'packageType': 'Unlimited',
      'packagePrice': '$149',
      'packageDescription': 'With all pro package features, include:',
      'packageDuration': 'Month',
      'packagePlanInclusions': [
        {
          id: 1,
          inclusion: 'All Pro Package features'
        },
        {
          id: 2,
          inclusion: 'Customizable templates and forms'
        },
        {
          id: 3,
          inclusion: 'Multi-location support'
        },
        {
          id: 4,
          inclusion: '24/7 customer support'
        },
        {
          id: 5,
          inclusion: 'Secure patient portal with mobile app'
        }
      ]
    }
  ];

  const yearlyPackagePlans = [
    {
      id: 1,
      'packageType': 'Starter',
      'packagePrice': '$79',
      'packageDescription': 'By creating an Account on our service, you agree to subscribe',
      'packageDuration': 'Year',
      'packagePlanInclusions': [
        {
          id: 1,
          inclusion: 'Electronic Health Records (EHR) management'
        },
        {
          id: 2,
          inclusion: 'Appointment scheduling and reminders'
        },
        {
          id: 3,
          inclusion: 'Patient communication portal'
        },
        {
          id: 4,
          inclusion: 'Secure data storage'
        },
        {
          id: 5,
          inclusion: 'Basic reporting and analytics'
        }
      ]
    },
    {
      id: 2,
      'packageType': 'Pro',
      'packagePrice': '$99',
      'packageDescription': 'With all starter package features, include:',
      'packageDuration': 'Year',
      'packagePlanInclusions': [
        {
          id: 1,
          inclusion: 'All Basic Package features'
        },
        {
          id: 2,
          inclusion: 'Telehealth capabilities'
        },
        {
          id: 3,
          inclusion: 'Billing and invoicing tools'
        },
        {
          id: 4,
          inclusion: 'Advanced reporting and analytics'
        },
        {
          id: 5,
          inclusion: 'Integration with pharmacy systems'
        }
      ]
    },
    {
      id: 3,
      'packageType': 'Unlimited',
      'packagePrice': '$149',
      'packageDescription': 'With all pro package features, include:',
      'packageDuration': 'Year',
      'packagePlanInclusions': [
        {
          id: 1,
          inclusion: 'All Pro Package features'
        },
        {
          id: 2,
          inclusion: 'Customizable templates and forms'
        },
        {
          id: 3,
          inclusion: 'Multi-location support'
        },
        {
          id: 4,
          inclusion: '24/7 customer support'
        },
        {
          id: 5,
          inclusion: 'Secure patient portal with mobile app'
        }
      ]
    }
  ];

  const handleChoosePackage = (packageData) => {
    // save somewhere maybe on local storage in the meantime.
    let chosenPackagePlan = {
      id: packageData.id,
      type: packageData.packageType,
      planDuration: packageData.packageDuration
    }

    storeData('chosenPackagePlan', JSON.stringify(chosenPackagePlan));
  }

  const renderedPackagePlanMonthly = monthlyPackagePlans.map((item) => {
    return <PackagePlanCard key={item.id} data={item} onChoosePackage={handleChoosePackage} />
  });

  const renderedPackagePlanYearly = yearlyPackagePlans.map((item) => {
    return <PackagePlanCard key={item.id} data={item} onChoosePackage={handleChoosePackage} />
  });


  const packagePlanTabs = [
    {
      'title': 'Monthly',
      'disabled': false,
      'content': (
        <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:h-[550px] max-w-5xl" style={{ gap: '32px' }}>
          {renderedPackagePlanMonthly}
        </View>
      )
    },
    {
      'title': 'Yearly',
      'disabled': true, 
      'content': (
        <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:h-[550px] max-w-5xl" style={{ gap: '32px' }}>
          {renderedPackagePlanYearly}
        </View>
      )
    }
  ]


  return (
    <View className="items-center lg:px-5 py-[20px] min-h-screen justify-center">
      <View className="" style={{ gap: '12px' }}>

        {/* Logo */}
        <View className="flex flex-row justify-center">
          <Image
            source={LogoImage}
            width={'169px'}
            height={'40px'}
            alt={'CareDocs Logo'}
            className="w-[100px] h-[100px]"
          />
        </View>
        {/* End of Logo */}

        <Text className="text-[48px] font-tt-commons-medium font-[600] leading-[56px]">Choose your package</Text>

        <Text className="text-[14px] font-sans text-center font-[400] leading-5">Let’s make your administration process more easily with CareDocs.</Text>
      </View>

      <View className="mt-[32px]">
        {/* Tabs Here */}
        <Tabs tabs={packagePlanTabs} />
      </View>
    </View>
  )
}
