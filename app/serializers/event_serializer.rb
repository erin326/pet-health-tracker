class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :start, :end, :pet_id
end
