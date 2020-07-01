import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      user_id: '123456',
      provider_id: 'user',
      date: new Date(2020, 4, 23, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      user_id: '123456',
      provider_id: 'user',
      date: new Date(2020, 4, 23, 9, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      user_id: '123456',
      provider_id: 'user',
      date: new Date(2020, 4, 23, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      user_id: '123456',
      provider_id: 'user',
      date: new Date(2020, 4, 23, 11, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      user_id: '123456',
      provider_id: 'user',
      date: new Date(2020, 4, 23, 12, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      user_id: '123456',
      provider_id: 'user',
      date: new Date(2020, 4, 23, 13, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      user_id: '123456',
      provider_id: 'user',
      date: new Date(2020, 4, 23, 14, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      user_id: '123456',
      provider_id: 'user',
      date: new Date(2020, 4, 23, 15, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      user_id: '123456',
      provider_id: 'user',
      date: new Date(2020, 4, 23, 16, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      user_id: '123456',
      provider_id: 'user',
      date: new Date(2020, 4, 23, 17, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      user_id: '123456',
      provider_id: 'user',
      date: new Date(2020, 4, 23, 11, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      user_id: '123456',
      provider_id: 'user',
      date: new Date(2020, 4, 22, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 21, available: true },
        { day: 22, available: true },
        { day: 23, available: false },
      ]),
    );
  });
});
