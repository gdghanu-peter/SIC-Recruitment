import type { GeneralState } from '~/types/apply/general-state'
import type { BcmState } from '~/types/apply/specific/bcm-state'
import type { BdnState } from '~/types/apply/specific/bdn-state'
import type { BnsState } from '~/types/apply/specific/bns-state'
import type { BskState } from '~/types/apply/specific/bsk-state'
import type { BttState } from '~/types/apply/specific/btt-state'

export const useForm = () => {
  const supabase: any = useSupabaseClient()

  const generalForm = async (state: GeneralState) => {
    try {
      const { data, error } = await supabase
        .from('General Information')
        .insert([
          {
            name: state.name,
            dob: state.dob,
            gender: state.gender,
            highSchool: state.highSchool,
            major: state.major,
            phoneNumber: state.phoneNumber,
            email: state.email,
            facebook: state.facebook,
            avatar: state.avatar,
            extracurriculars: state.extracurriculars,
            strengthsWeaknesses: state.strengthsWeaknesses,
            uniqueness: state.uniqueness,
            futurePlans: state.futurePlans,
            photoThoughts: state.photoThoughts
          }
        ])
        .select()
      if (error) throw error
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const bttForm = async (state: BttState, apply_id: number) => {
    try {
      const { data, error } = await supabase
        .from('BTT')
        .insert([
          {
            apply_id,
            communicationRole: state.communicationRole,
            contentAttraction: state.contentAttraction,
            mediaCampaign: state.mediaCampaign,
            messageInterpretation: state.messageInterpretation
          }
        ])
        .select()
      if (error) throw error
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const bskForm = async (state: BskState, apply_id: number) => {
    try {
      const { data, error } = await supabase
        .from('BSK')
        .insert([
          {
            apply_id,
            eventPlanning: state.eventPlanning,
            riskTaking: state.riskTaking,
            emotionalIntelligence: state.emotionalIntelligence,
            creativeExpression: state.creativeExpression,
            philosophicalReflection: state.philosophicalReflection
          }
        ])
        .select()
      if (error) throw error
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const bnsForm = async (state: BnsState, apply_id: number) => {
    try {
      const { data, error } = await supabase
        .from('BNS')
        .insert([
          {
            apply_id,
            hrKnowledge: state.hrKnowledge,
            personalReflection: state.personalReflection,
            creativeThinking: state.creativeThinking
          }
        ])
        .select()
      if (error) throw error
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const bdnForm = async (state: BdnState, apply_id: number) => {
    try {
      const { data, error } = await supabase
        .from('BDN')
        .insert([
          {
            apply_id,
            understandingExternalRelations:
              state.understandingExternalRelations,
            selfReflection: state.selfReflection,
            problemSolving: state.problemSolving,
            emailWriting: state.emailWriting
          }
        ])
        .select()
      if (error) throw error
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const bcmForm = async (state: BcmState, apply_id: number) => {
    try {
      const { data, error } = await supabase
        .from('BCM')
        .insert([
          {
            apply_id,
            logicalThinking: state.logicalThinking,
            decisionMaking: state.decisionMaking,
            financialPlanning: state.financialPlanning
          }
        ])
        .select()
      if (error) throw error
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  return {
    generalForm,
    bttForm,
    bskForm,
    bnsForm,
    bdnForm,
    bcmForm
  }
}
